export interface Option {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: Option[];
  disabled?: boolean;
}
