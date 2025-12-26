import axios from 'axios';
import type { AmountPayload, AmountResponse } from '@types';

const API = axios.create({
  baseURL: '/b2api',
  headers: {
    'Content-Type': 'application/json',
    serial: 'a7307e89-fbeb-4b28-a8ce-55b7fb3c32aa',
  },
});

export const getAmount = async (
  payload: AmountPayload,
): Promise<AmountResponse> => {
  const { data } = await API.post('/change/user/pair/calc', payload);

  return data;
};
