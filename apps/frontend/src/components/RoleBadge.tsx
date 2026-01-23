import { Badge } from '@/components/ui/badge';
import type { UserRole } from '@/types/user';

interface RoleBadgeProps {
  role: UserRole;
}

export function RoleBadge({ role }: RoleBadgeProps) {
  const variants: Record<UserRole, 'default' | 'secondary' | 'destructive'> = {
    admin: 'destructive',
    editor: 'default',
    viewer: 'secondary',
  };

  return (
    <Badge variant={variants[role]}>
      {role}
    </Badge>
  );
}
