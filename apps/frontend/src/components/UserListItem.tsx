import type { User } from '@/types/user';
import { RoleBadge } from './RoleBadge';
import { StatusBadge } from './StatusBadge';
import { cn } from '@/lib/utils';

interface UserListItemProps {
  user: User;
  isSelected: boolean;
  onClick: () => void;
}

export function UserListItem({ user, isSelected, onClick }: UserListItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'p-4 border rounded-lg cursor-pointer transition-colors hover:bg-accent',
        isSelected && 'bg-accent'
      )}
    >
      <div className="font-medium mb-2">{user.name}</div>
      <div className="flex items-center gap-2">
        <RoleBadge role={user.role} />
        <StatusBadge active={user.active} />
      </div>
    </div>
  );
}
