import { useState, useMemo } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useUsers, useUser, useToggleUserActive } from '@/hooks/useUsers';
import { SearchBar } from '@/components/SearchBar';
import { RoleFilter } from '@/components/RoleFilter';
import { SortButton } from '@/components/SortButton';
import { UserList } from '@/components/UserList';
import { UserDetails } from '@/components/UserDetails';

function App() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 300);

  const { data: users = [], isLoading: isLoadingUsers } = useUsers(
    debouncedSearch,
    roleFilter
  );

  const { data: selectedUser, isLoading: isLoadingUser } = useUser(selectedUserId);
  const toggleActive = useToggleUserActive();

  const sortedUsers = useMemo(() => {
    if (!sortOrder || !users) return users;

    return [...users].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [users, sortOrder]);

  const handleSort = () => {
    setSortOrder((prev) => {
      if (prev === null) return 'asc';
      if (prev === 'asc') return 'desc';
      return null;
    });
  };

  const handleToggleActive = (id: string) => {
    toggleActive.mutate(id);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">User Management</h1>

        <div className="flex gap-4 mb-6">
          <SearchBar value={search} onChange={setSearch} />
          <RoleFilter value={roleFilter} onChange={setRoleFilter} />
          <SortButton
            sortOrder={sortOrder}
            onSort={handleSort}
            disabled={isLoadingUsers || !users.length}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserList
            users={sortedUsers}
            selectedUserId={selectedUserId}
            onSelectUser={setSelectedUserId}
            isLoading={isLoadingUsers}
          />
          <UserDetails
            user={selectedUser}
            isLoading={isLoadingUser}
            onToggleActive={handleToggleActive}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
