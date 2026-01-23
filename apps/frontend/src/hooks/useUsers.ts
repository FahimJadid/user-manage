import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { User } from '@/types/user';

export function useUsers(search?: string, role?: string) {
  return useQuery({
    queryKey: ['users', search, role],
    queryFn: () => {
      const params: { search?: string; role?: string } = {};
      if (search) params.search = search;
      if (role) params.role = role;
      
      return api.users.getAll(params);
    },
  });
}

export function useUser(id: string | null) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => api.users.getById(id!),
    enabled: !!id,
  });
}

export function useToggleUserActive() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => api.users.toggleActive(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['user', id] });
      
      const previousUser = queryClient.getQueryData<User>(['user', id]);
      
      if (previousUser) {
        queryClient.setQueryData(['user', id], {
          ...previousUser,
          active: !previousUser.active,
        });
      }
      
      return { previousUser };
    },
    onError: (_err, id, context) => {
      if (context?.previousUser) {
        queryClient.setQueryData(['user', id], context.previousUser);
      }
    },
    onSettled: (_data, _error, id) => {
      queryClient.invalidateQueries({ queryKey: ['user', id] });
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
