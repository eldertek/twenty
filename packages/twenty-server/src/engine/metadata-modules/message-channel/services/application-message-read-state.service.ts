import { Injectable } from '@nestjs/common';

import { isDefined } from 'twenty-shared/utils';
import { In } from 'typeorm';

import { type SetAppMessageThreadReadStateOutput } from 'src/engine/metadata-modules/message-channel/dtos/set-app-message-thread-read-state.output';
import { ApplicationMessageChannelsService } from 'src/engine/metadata-modules/message-channel/services/application-message-channels.service';
import { computeAppMessageThreadReadStateUpdate } from 'src/engine/metadata-modules/message-channel/utils/compute-app-message-thread-read-state-update.util';
import { WorkspaceOrmManager } from 'src/engine/twenty-orm/workspace-orm.manager';
import { buildSystemAuthContext } from 'src/engine/twenty-orm/utils/build-system-auth-context.util';
import { type MessageChannelMessageAssociationWorkspaceEntity } from 'src/modules/messaging/common/standard-objects/message-channel-message-association.workspace-entity';

@Injectable()
export class ApplicationMessageReadStateService {
  constructor(
    private readonly applicationMessageChannelsService: ApplicationMessageChannelsService,
    private readonly workspaceOrmManager: WorkspaceOrmManager,
  ) {}

  async setThreadReadState({
    applicationId,
    workspaceId,
    requestUserWorkspaceId,
    messageChannelId,
    threadExternalId,
    isRead,
  }: {
    applicationId: string;
    workspaceId: string;
    requestUserWorkspaceId: string | null;
    messageChannelId: string;
    threadExternalId: string;
    isRead: boolean;
  }): Promise<SetAppMessageThreadReadStateOutput> {
    await this.applicationMessageChannelsService.findOwnedOrThrow({
      applicationId,
      workspaceId,
      requestUserWorkspaceId,
      id: messageChannelId,
    });

    return this.workspaceOrmManager.executeInWorkspaceContext(
      async () => {
        const messageChannelMessageAssociationRepository =
          this.workspaceOrmManager.getRepositoryWithoutPermissionChecks<MessageChannelMessageAssociationWorkspaceEntity>(
            'messageChannelMessageAssociation',
          );

        const associations =
          await messageChannelMessageAssociationRepository.find({
            where: {
              messageChannelId,
              messageThreadExternalId: threadExternalId,
            },
            relations: { message: true },
          });

        const associationIdsToUpdate = computeAppMessageThreadReadStateUpdate({
          isRead,
          threadMessages: associations.map((association) => ({
            associationId: association.id,
            isRead: association.isRead,
            direction: association.direction,
            receivedAt: isDefined(association.message?.receivedAt)
              ? new Date(association.message.receivedAt)
              : null,
          })),
        });

        if (associationIdsToUpdate.length > 0) {
          await messageChannelMessageAssociationRepository.update(
            { id: In(associationIdsToUpdate) },
            { isRead },
          );
        }

        return { updatedMessageCount: associationIdsToUpdate.length };
      },
      buildSystemAuthContext(workspaceId),
      { lite: true },
    );
  }
}
