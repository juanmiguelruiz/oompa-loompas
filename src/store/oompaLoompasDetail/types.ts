import { OompaLoompa } from 'types';

export interface OompaLoompasDetailState {
  data: Record<number, OompaLoompa>;
  loading: boolean;
  error: boolean;
}

export enum ActionTypes {
  FETCH_OOMPA_LOOMPA_BY_ID = 'oompaLoompasById/FETCH_OOMPA_LOOMPA_BY_ID',
}

export enum Slices {
  OOMPA_LOOMPAS_DETAIL = 'oompaLoompasDetail',
}
