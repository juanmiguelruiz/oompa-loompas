import { createTransform } from 'redux-persist';
import { OompaLoompaState, Slices } from './types';
import { initialState } from './slice';

// 24 hours in milliseconds
export const EXPIRATION_TIME = 24 * 60 * 60 * 1000;

const createExpireTransform = (expireDuration: number, initialState: OompaLoompaState) =>
  createTransform(
    (inboundState: OompaLoompaState) => ({
      ...inboundState,
      timestamp: Date.now(),
    }),
    outboundState => {
      const { timestamp, ...restState } = outboundState;
      if (!timestamp || Date.now() - timestamp > expireDuration) {
        return initialState;
      }
      return restState;
    },
    { whitelist: [Slices.OOMPA_LOOMPAS] }
  );
export const oompaLoompaExpireTransform = createExpireTransform(EXPIRATION_TIME, initialState);
