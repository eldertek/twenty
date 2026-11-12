import { useMutation } from '@apollo/client/react';

import { MARK_MESSAGE_THREAD_AS_READ } from '@/activities/emails/graphql/mutations/markMessageThreadAsRead';
import { useApolloCoreClient } from '@/object-metadata/hooks/useApolloCoreClient';
import {
  type MarkMessageThreadAsReadMutation,
  type MarkMessageThreadAsReadMutationVariables,
} from '~/generated/graphql';

export const useMarkMessageThreadAsRead = () => {
  const apolloCoreClient = useApolloCoreClient();

  const [mutate] = useMutation<
    MarkMessageThreadAsReadMutation,
    MarkMessageThreadAsReadMutationVariables
  >(MARK_MESSAGE_THREAD_AS_READ, {
    client: apolloCoreClient,
  });

  const markMessageThreadAsRead = async (messageThreadId: string) => {
    apolloCoreClient.cache.modify({
      id: apolloCoreClient.cache.identify({
        __typename: 'TimelineThread',
        id: messageThreadId,
      }),
      fields: { read: () => true },
    });

    await mutate({ variables: { messageThreadId } });
  };

  return { markMessageThreadAsRead };
};
