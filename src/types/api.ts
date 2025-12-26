import type { Nullable } from '@types';

export type AmountPayload = {
  pairId: number;
  inAmount: Nullable<number>;
  outAmount: Nullable<number>;
};

export type AmountResponse = {
  counter: number;
  inAmount: number;
  outAmount: number;
  isStraight: boolean;
  price: [string, string];
};
