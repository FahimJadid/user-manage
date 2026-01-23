import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import { RoleBadge } from './RoleBadge';
import { StatusBadge } from './StatusBadge';
import { useViewingTimer } from '@/hooks/useViewingTimer';
import type { User } from '@/types/user';

interface UserDetailsProps {
  user: User | null;
  isLoading: boolean;
  onToggleActive: (id: string) => void;
}

export function UserDetails({ user, isLoading, onToggleActive }: UserDetailsProps) {
  const viewingSeconds = useViewingTimer(!!user);

  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">Name</div>
            <Skeleton className="h-6 w-48" />
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
            <Skeleton className="h-6 w-64" />
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-1">Role</div>
            <Skeleton className="h-6 w-20" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            Select a user to view details
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>User Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">Name</div>
          <div className="text-lg font-medium">{user.name}</div>
        </div>
        
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
          <div className="text-lg">{user.email}</div>
        </div>
        
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">Role</div>
          <div><RoleBadge role={user.role} /></div>
        </div>
        
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">Status</div>
          <div><StatusBadge active={user.active} /></div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
            <span>⭐</span>
            <span className="font-medium">Bonus</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Viewing profile for {viewingSeconds} seconds
          </p>
          
          <Button 
            variant={user.active ? 'outline' : 'default'}
            onClick={() => onToggleActive(user.id)}
            className="w-full"
          >
            {user.active ? 'Deactivate' : 'Activate'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
