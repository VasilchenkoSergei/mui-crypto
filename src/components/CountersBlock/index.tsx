import { useEffect, useMemo, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import useSWRMutation from 'swr/mutation';
import debounce from 'lodash.debounce';
import { getAmount } from '@api';
import type { Nullable, AmountPayload, AmountResponse } from '@types';
import Counter from '../Counter';
import {
  MIN_IN_AMOUNT,
  MAX_IN_AMOUNT,
  STEP_IN_AMOUNT,
  STEP_OUT_AMOUNT,
  PAIR_ID,
} from './constants';

export default function CountersBlock() {
  const [amountData, setAmountData] = useState<Nullable<AmountResponse>>(null);

  const { trigger } = useSWRMutation<AmountResponse, Error, 'counters-block', AmountPayload>(
    'counters-block',
    async (_key, { arg }) => getAmount(arg),
    {
      onSuccess: (data) => {
        setAmountData(data);
      },
      onError: (error) => {
        console.log('Не удалось выполнить запрос ', error);
      },
    }
  );

  const debouncedTrigger = useMemo(
    () => debounce((payload: AmountPayload) => trigger(payload), 300),
    [trigger]
  );

  const onCountChange = (value: number, direction: 'straight' | 'reverse') => {
    debouncedTrigger({
      pairId: PAIR_ID,
      inAmount: direction === 'straight' ? value : null,
      outAmount: direction === 'reverse' ? value : null,
    });
  };

  useEffect(() => {
    debouncedTrigger({
      pairId: PAIR_ID,
      inAmount: MIN_IN_AMOUNT,
      outAmount: null,
    });

    return () => debouncedTrigger.cancel();
  }, [debouncedTrigger]);

  return (
    <>
      <Typography variant='h1' sx={{ marginBottom: 2 }}>
        Объемы
      </Typography>
      <Stack direction='row' sx={{ display: 'flex', gap: 2, marginBottom: 2, width: '100%' }}>
        <Counter
          title='Отдаете (лот 1000)'
          currency='Ethereum, ETH'
          value={Number(amountData?.inAmount) || MIN_IN_AMOUNT}
          min={MIN_IN_AMOUNT}
          max={MAX_IN_AMOUNT}
          step={STEP_IN_AMOUNT}
          onChangeCallback={(value) => onCountChange(value, 'straight')}
        />
        <Counter
          title='Получаете (лот 1000)'
          currency='Рубль, RUR'
          value={Number(amountData?.outAmount) || 0}
          min={MIN_IN_AMOUNT * Number(amountData?.price[0] || 0)}
          max={MAX_IN_AMOUNT * Number(amountData?.price[0] || 0)}
          step={STEP_OUT_AMOUNT}
          onChangeCallback={(value) => onCountChange(value, 'reverse')}
          isTitleRight
        />
      </Stack>
    </>
  );
}
