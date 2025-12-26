import { useEffect, useState } from 'react';
import { NumericFormat, type NumberFormatValues, type SourceInfo } from 'react-number-format';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import type { ICounterCardProps } from './types';
import { iconButtonStyles, inputStyles, paperStyles } from './styles';

export default function Counter(props: ICounterCardProps) {
  const { title, currency, value, isTitleRight, min, max, step, onChangeCallback, sx } = props;
  const [count, setCount] = useState<number>(value);
  const [isUserInput, setIsUserInput] = useState(false);

  const decimalCount = Math.max(5, step?.toString().split('.')[1]?.length ?? 0);

  const onButtonClick = (operation: 'increment' | 'decrement') => {
    const isIncrement = operation === 'increment';

    setCount((prev) => {
      const currentStep = step ?? 1;
      let currentValue = prev;

      if (isIncrement && max && prev > max - currentStep) {
        currentValue = max;
      } else if (!isIncrement && min && prev < min + currentStep) {
        currentValue = min;
      } else {
        currentValue = isIncrement ? prev + currentStep : prev - currentStep;
      }

      return Number(currentValue.toFixed(decimalCount));
    });
    setIsUserInput(true);
  };

  const onInputChange = (values: NumberFormatValues, sourceInfo: SourceInfo) => {
    if (sourceInfo.source === 'event') {
      setCount(values.floatValue ?? 0);
      setIsUserInput(true);
    }
  };

  const onInputBlur = () => {
    setIsUserInput(true);

    if (max && count > max) {
      setCount(max);
    } else if (min && count < min) {
      setCount(min);
    }
  };

  useEffect(() => {
    if (!isUserInput) return;

    setIsUserInput(false);
    onChangeCallback(count);
  }, [count, onChangeCallback, isUserInput]);

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <Stack direction='column' spacing='10px' sx={{ flex: 1, width: 'calc(50% - 10px)', ...sx }}>
      <Typography
        variant='subtitle1'
        color='text.secondary'
        sx={{ textAlign: isTitleRight ? 'right' : 'left' }}
      >
        {title}
      </Typography>
      <Paper elevation={0} sx={paperStyles}>
        <Typography variant='subtitle2' component='span' color='text.secondary'>
          {currency}
        </Typography>
        <Stack direction='row' alignItems='center' spacing={{ xxs: '10px', xs: '14px' }}>
          <IconButton onClick={() => onButtonClick('decrement')} sx={iconButtonStyles}>
            <RemoveIcon sx={{ fontSize: '18px' }} />
          </IconButton>
          <NumericFormat
            customInput={TextField}
            value={count || ''}
            onValueChange={onInputChange}
            onBlur={onInputBlur}
            thousandSeparator=' '
            decimalSeparator='.'
            decimalScale={decimalCount}
            fixedDecimalScale
            allowNegative={false}
            min={min}
            max={max}
            step={step}
            slotProps={{
              input: {
                sx: inputStyles,
              },
            }}
          />
          <IconButton onClick={() => onButtonClick('increment')} sx={iconButtonStyles}>
            <AddIcon sx={{ fontSize: '18px' }} />
          </IconButton>
        </Stack>
      </Paper>
    </Stack>
  );
}
