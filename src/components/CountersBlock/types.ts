import type { SxProps, Theme } from '@mui/material';

export interface ICounterCardProps {
  title: string;
  currency: string;
  value: number;
  isTitleRight?: boolean;
  sx?: SxProps<Theme>;
}
