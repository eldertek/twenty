import { MetadataApiClient } from 'twenty-client-sdk/metadata';
import { isDefined } from 'twenty-sdk/utils';

import { getLinkedinChatReadState } from 'src/logic-functions/utils/get-linkedin-chat-read-state.util';
import { type UnipileChat } from 'src/unipile/types/unipile-chat.type';

type MetadataMutationSelection = Parameters<MetadataApiClient['mutation']>[0];

export const syncLinkedinChatReadState = async ({
  messageChannelId,
  chat,
}: {
  messageChannelId: string;
  chat: Pick<UnipileChat, 'id' | 'unread_count'>;
}): Promise<boolean> => {
  const isRead = getLinkedinChatReadState(chat);

  if (!isDefined(isRead)) {
    return false;
  }

  // the runtime client is generated from the server schema; the pinned client types predate this mutation
  await new MetadataApiClient({ runAs: 'application' }).mutation({
    setAppMessageThreadReadState: {
      __args: {
        input: { messageChannelId, threadExternalId: chat.id, isRead },
      },
      updatedMessageCount: true,
    },
  } as unknown as MetadataMutationSelection);

  return true;
};
