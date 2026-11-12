import { MessageChannelType } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';

import { type WorkspaceAuthContext } from 'src/engine/core-modules/auth/types/workspace-auth-context.type';
import { MessageChannelExceptionCode } from 'src/engine/metadata-modules/message-channel/message-channel.exception';
import { ApplicationMessageSendService } from 'src/engine/metadata-modules/message-channel/services/application-message-send.service';
import {
  PermissionsException,
  PermissionsExceptionCode,
  PermissionsExceptionMessage,
} from 'src/engine/permissions/permissions.exception';

const WORKSPACE_ID = '33333333-3333-4333-8333-333333333333';
const USER_WORKSPACE_ID = '44444444-4444-4444-8444-444444444444';
const MESSAGE_CHANNEL_ID = '55555555-5555-4555-8555-555555555555';
const PERSON_ID = '66666666-6666-4666-8666-666666666666';

const CALLER_AUTH_CONTEXT = {
  type: 'user',
  workspace: { id: WORKSPACE_ID },
  userWorkspaceId: USER_WORKSPACE_ID,
} as WorkspaceAuthContext;

const buildQueryBuilder = (rawResult: { handle: string } | undefined) => {
  const queryBuilder = {
    select: jest.fn(),
    innerJoin: jest.fn(),
    where: jest.fn(),
    andWhere: jest.fn(),
    orderBy: jest.fn(),
    limit: jest.fn(),
    getRawOne: jest.fn().mockResolvedValue(rawResult),
  };

  for (const method of [
    'select',
    'innerJoin',
    'where',
    'andWhere',
    'orderBy',
    'limit',
  ] as const) {
    queryBuilder[method].mockReturnValue(queryBuilder);
  }

  return queryBuilder;
};

const buildService = ({
  findPerson,
  knownHandle,
}: {
  findPerson: () => Promise<unknown>;
  knownHandle?: string;
}) => {
  const queryBuilder = buildQueryBuilder(
    isDefined(knownHandle) ? { handle: knownHandle } : undefined,
  );
  const personRepository = { findOne: jest.fn(findPerson) };
  const workspaceOrmManager = {
    executeInWorkspaceContext: jest.fn((callback: () => unknown) => callback()),
    getRepository: jest.fn().mockReturnValue(personRepository),
    getRepositoryWithoutPermissionChecks: jest.fn().mockReturnValue({
      createQueryBuilder: jest.fn().mockReturnValue(queryBuilder),
    }),
  };
  const messagingProviderMessageSenderService = {
    resolveConversationStarterOrThrow: jest
      .fn()
      .mockResolvedValue({ messagingProvider: { id: 'provider-id' } }),
    startConversationOrThrow: jest.fn().mockResolvedValue({
      externalId: 'message-1',
      threadExternalId: 'chat-1',
      recipients: [{ personId: PERSON_ID, handle: 'grace-handle' }],
    }),
  };

  const service = new ApplicationMessageSendService(
    {
      findOne: jest.fn().mockResolvedValue({
        id: MESSAGE_CHANNEL_ID,
        handle: 'owner-handle',
        displayName: 'Owner',
        isSyncEnabled: true,
        type: MessageChannelType.APP,
        connectedAccountId: 'connected-account-id',
        messagingProviderUniversalIdentifier: 'messaging-provider',
      }),
    } as never,
    {
      verifyUsableByCaller: jest.fn().mockResolvedValue({
        id: 'connected-account-id',
        applicationId: 'application-id',
        connectionProviderId: 'connection-provider-id',
      }),
    } as never,
    messagingProviderMessageSenderService as never,
    {
      ingest: jest.fn().mockResolvedValue({
        messages: [{ messageId: 'message-id', messageThreadId: 'thread-id' }],
      }),
    } as never,
    workspaceOrmManager as never,
    {
      getOrRecompute: jest.fn().mockResolvedValue({
        flatWorkspaceMemberMaps: { idByUserWorkspaceId: {} },
      }),
    } as never,
    {
      withLock: jest.fn((callback: () => unknown) => callback()),
    } as never,
    {
      get: jest.fn().mockResolvedValue(undefined),
      set: jest.fn(),
    } as never,
  );

  return {
    service,
    workspaceOrmManager,
    queryBuilder,
    messagingProviderMessageSenderService,
  };
};

const startConversation = (service: ApplicationMessageSendService) =>
  service.startConversation({
    workspaceId: WORKSPACE_ID,
    userWorkspaceId: USER_WORKSPACE_ID,
    messageChannelId: MESSAGE_CHANNEL_ID,
    personId: PERSON_ID,
    callerAuthContext: CALLER_AUTH_CONTEXT,
    text: 'Hello',
    idempotencyKey: '77777777-7777-4777-8777-777777777777',
  });

describe('ApplicationMessageSendService start conversation', () => {
  it('sends the person the caller can read with the handle known on this channel', async () => {
    const {
      service,
      workspaceOrmManager,
      queryBuilder,
      messagingProviderMessageSenderService,
    } = buildService({
      findPerson: async () => ({
        id: PERSON_ID,
        name: { firstName: 'Grace', lastName: 'Hopper' },
      }),
      knownHandle: 'grace-handle',
    });

    await expect(startConversation(service)).resolves.toEqual({
      messageId: 'message-id',
      messageThreadId: 'thread-id',
    });

    expect(workspaceOrmManager.executeInWorkspaceContext).toHaveBeenCalledWith(
      expect.any(Function),
      CALLER_AUTH_CONTEXT,
    );
    expect(queryBuilder.andWhere).toHaveBeenCalledWith(
      'messageChannelMessageAssociation.messageChannelId = :messageChannelId',
      { messageChannelId: MESSAGE_CHANNEL_ID },
    );
    expect(
      messagingProviderMessageSenderService.startConversationOrThrow,
    ).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: expect.objectContaining({
          recipients: [
            {
              personId: PERSON_ID,
              displayName: 'Grace Hopper',
              handle: 'grace-handle',
            },
          ],
        }),
      }),
    );
  });

  it('reports a person the caller may not read as not found', async () => {
    const { service, messagingProviderMessageSenderService } = buildService({
      findPerson: async () => {
        throw new PermissionsException(
          PermissionsExceptionMessage.PERMISSION_DENIED,
          PermissionsExceptionCode.PERMISSION_DENIED,
        );
      },
    });

    await expect(startConversation(service)).rejects.toMatchObject({
      message: `Person ${PERSON_ID} not found`,
      code: MessageChannelExceptionCode.INVALID_MESSAGE_CHANNEL_INPUT,
    });
    expect(
      messagingProviderMessageSenderService.startConversationOrThrow,
    ).not.toHaveBeenCalled();
  });

  it('reports a person hidden from the caller by record rules as not found', async () => {
    const { service, messagingProviderMessageSenderService } = buildService({
      findPerson: async () => null,
    });

    await expect(startConversation(service)).rejects.toMatchObject({
      message: `Person ${PERSON_ID} not found`,
    });
    expect(
      messagingProviderMessageSenderService.startConversationOrThrow,
    ).not.toHaveBeenCalled();
  });

  it('sends no handle when none is known on this channel', async () => {
    const { service, messagingProviderMessageSenderService } = buildService({
      findPerson: async () => ({ id: PERSON_ID, name: null }),
    });

    await startConversation(service);

    expect(
      messagingProviderMessageSenderService.startConversationOrThrow,
    ).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: expect.objectContaining({
          recipients: [
            { personId: PERSON_ID, displayName: null, handle: null },
          ],
        }),
      }),
    );
  });
});
