import { OompaLoompa } from 'types';

export interface OompaLoompaState {
  data: {
    resultsByPage: Record<number, OompaLoompa[]>;
    current: number;
    total: number;
  };
  loading: boolean;
  error: boolean;
}

export enum ActionTypes {
  FETCH_OOMPA_LOOMPAS = 'oompaLoompas/FETCH_OOMPA_LOOMPAS',
}

export enum Slices {
  OOMPA_LOOMPAS = 'oompaLoompas',
}
