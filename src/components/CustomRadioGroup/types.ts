import type { SxProps, Theme } from '@mui/material';

export interface ICustomRadioGroupProps {
  options: {
    id: string;
    title: string;
  }[];
  sx?: SxProps<Theme>;
}
