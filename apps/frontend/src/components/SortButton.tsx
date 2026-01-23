import { Button } from '@/components/ui/button';

interface SortButtonProps {
  sortOrder: 'asc' | 'desc' | null;
  onSort: () => void;
  disabled?: boolean;
}

export function SortButton({ sortOrder, onSort, disabled }: SortButtonProps) {
  return (
    <Button variant="outline" onClick={onSort} disabled={disabled}>
      Sort by Name
      {sortOrder === 'asc' && ' ↑'}
      {sortOrder === 'desc' && ' ↓'}
    </Button>
  );
}
