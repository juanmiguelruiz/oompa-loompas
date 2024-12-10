import { OompaLoompa } from 'types';

export interface OompaLoompasListState {
  data: {
    resultsByPage: Record<number, OompaLoompa[]>;
    current: number;
    total: number;
  };
  loading: boolean;
  error: boolean;
}

export enum ActionTypes {
  FETCH_OOMPA_LOOMPAS_LIST = 'oompaLoompasList/FETCH_OOMPA_LOOMPAS_LIST',
}

export enum Slices {
  OOMPA_LOOMPAS_LIST = 'oompaLoompasList',
}
