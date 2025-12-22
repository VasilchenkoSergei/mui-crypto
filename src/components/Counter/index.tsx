import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { formatNumber } from '../../utils/format-number';
import type { ICounterCardProps } from './types';

const iconButtonStyles = {
  width: { xxs: '22px', xs: '24px' },
  height: { xxs: '22px', xs: '24px' },
  borderRadius: '50%',
  backgroundColor: 'background.default',
  color: 'text.primary',
  '&:hover': {
    backgroundColor: 'background.default',
  },
};

export default function Counter(props: ICounterCardProps) {
  const { title, currency, value, isTitleRight, sx } = props;
  const [count, setCount] = useState(value);

  return (
    <Stack direction='column' spacing='10px' sx={{ flex: 1, width: 'calc(50% - 10px)', ...sx }}>
      <Typography
        variant='subtitle1'
        color='text.secondary'
        sx={{ textAlign: isTitleRight ? 'right' : 'left' }}
      >
        {title}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          p: '12px 10px',
          borderRadius: 3,
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Typography variant='subtitle2' component='span' color='text.secondary'>
          {currency}
        </Typography>
        <Stack direction='row' alignItems='center' spacing={{ xxs: '10px', xs: '14px' }}>
          <IconButton onClick={() => setCount((prev) => prev - 1)} sx={iconButtonStyles}>
            <RemoveIcon sx={{ fontSize: '18px' }} />
          </IconButton>
          <Typography
            variant='subtitle1'
            sx={{ fontSize: { xxs: '10px', xs: '13px', sm: '16px' } }}
          >
            {formatNumber(count)}
          </Typography>
          <IconButton onClick={() => setCount((prev) => prev + 1)} sx={iconButtonStyles}>
            <AddIcon sx={{ fontSize: '18px' }} />
          </IconButton>
        </Stack>
      </Paper>
    </Stack>
  );
}
