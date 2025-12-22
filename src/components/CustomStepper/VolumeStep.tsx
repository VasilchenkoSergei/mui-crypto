import { Box } from '@mui/material';
import type { IVolumeStepProps } from './types';

export default function VolumeStep(props: IVolumeStepProps) {
  const { active, completed } = props;

  return (
    <Box
      sx={{
        flex: 1,
        height: 10,
        borderRadius: 4,
        backgroundColor: completed
          ? 'primary.main'
          : active
            ? 'primary.main'
            : 'background.paper',
      }}
    />
  );
}
