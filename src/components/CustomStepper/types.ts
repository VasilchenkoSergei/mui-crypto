import type { SxProps, Theme } from '@mui/material';

export interface ICustomStepperProps {
  steps: string[];
  activeStep: number;
  sx?: SxProps<Theme>;
}

export interface IVolumeStepProps {
  active: boolean;
  completed: boolean;
}
