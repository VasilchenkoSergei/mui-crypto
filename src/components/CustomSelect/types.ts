import type { Theme } from '@emotion/react';
import type { SxProps } from '@mui/material';

export interface ICustomSelectProps {
  options: ICustomSelectOption[];
  sx?: SxProps<Theme>;
}

export interface ICustomSelectOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ISelectOptionProps {
  option: ICustomSelectOption;
}
