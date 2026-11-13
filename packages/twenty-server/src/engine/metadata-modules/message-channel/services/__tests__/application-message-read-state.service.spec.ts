import { ApplicationMessageReadStateService } from 'src/engine/metadata-modules/message-channel/services/application-message-read-state.service';

describe('ApplicationMessageReadStateService before the isRead upgrade', () => {
  it('updates nothing while the workspace lacks the isRead field', async () => {
    const applicationMessageChannelsService = {
      findOwnedOrThrow: jest.fn().mockResolvedValue({}),
    };
    const workspaceOrmManager = { executeInWorkspaceContext: jest.fn() };
    const workspaceCacheService = {
      getOrRecompute: jest.fn().mockResolvedValue({
        flatFieldMetadataMaps: { byUniversalIdentifier: {} },
      }),
    };

    const service = new ApplicationMessageReadStateService(
      applicationMessageChannelsService as never,
      workspaceOrmManager as never,
      workspaceCacheService as never,
    );

    await expect(
      service.setThreadReadState({
        applicationId: 'application-id',
        workspaceId: 'workspace-id',
        requestUserWorkspaceId: null,
        messageChannelId: 'channel-id',
        threadExternalId: 'thread-external-id',
        isRead: false,
      }),
    ).resolves.toEqual({ updatedMessageCount: 0 });

    expect(
      applicationMessageChannelsService.findOwnedOrThrow,
    ).toHaveBeenCalled();
    expect(
      workspaceOrmManager.executeInWorkspaceContext,
    ).not.toHaveBeenCalled();
  });
});
