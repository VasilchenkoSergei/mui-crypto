import { Step, StepLabel, Stepper } from '@mui/material';
import type { ICustomStepperProps } from './types';
import VolumeStep from './VolumeStep';

export default function CustomStepper(props: ICustomStepperProps) {
  const { steps, activeStep, sx } = props;

  return (
    <Stepper alternativeLabel activeStep={activeStep} connector={null} sx={sx}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel slots={{ stepIcon: VolumeStep }}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
