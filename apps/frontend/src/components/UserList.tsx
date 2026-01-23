import type { User } from '@/types/user';
import { UserListItem } from './UserListItem';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface UserListProps {
  users: User[];
  selectedUserId: string | null;
  onSelectUser: (id: string) => void;
  isLoading?: boolean;
}

export function UserList({ users, selectedUserId, onSelectUser, isLoading }: UserListProps) {
  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Users List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Users List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {users.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
              isSelected={selectedUserId === user.id}
              onClick={() => onSelectUser(user.id)}
            />
          ))}
          {users.length === 0 && (
            <p className="text-muted-foreground text-center py-8">No users found</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
