import { Select } from '@/components/ui/select';

interface RoleFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function RoleFilter({ value, onChange }: RoleFilterProps) {
  return (
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">All Roles</option>
      <option value="admin">Admin</option>
      <option value="editor">Editor</option>
      <option value="viewer">Viewer</option>
    </Select>
  );
}
