import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (message: string) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      await actor.submitContactForm(message);
    },
    onSuccess: () => {
      // Invalidate submissions query if needed (for admin view)
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}
