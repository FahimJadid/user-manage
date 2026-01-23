const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const api = {
  users: {
    getAll: (params?: { search?: string; role?: string }) => {
      const query = new URLSearchParams();
      if (params?.search) query.append('search', params.search);
      if (params?.role) query.append('role', params.role);
      
      return fetch(`${API_BASE_URL}/users?${query}`).then(res => res.json());
    },
    
    getById: (id: string) => {
      return fetch(`${API_BASE_URL}/users/${id}`).then(res => res.json());
    },
    
    toggleActive: (id: string) => {
      return fetch(`${API_BASE_URL}/users/${id}/toggle-active`, {
        method: 'PATCH',
      }).then(res => res.json());
    }
  }
};
