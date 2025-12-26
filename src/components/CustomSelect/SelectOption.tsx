import { Box, Typography } from '@mui/material';
import type { ISelectOptionProps } from './types';

export default function SelectOption(props: ISelectOptionProps) {
  const { option } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box sx={{ fontSize: '40px' }}>{option.icon}</Box>
      <Box>
        <Typography sx={{ fontWeight: 500, color: 'text.primary' }}>
          {option.title}
        </Typography>
        <Typography variant='caption' sx={{ color: 'text.secondary' }}>
          {option.description}
        </Typography>
      </Box>
    </Box>
  );
}
