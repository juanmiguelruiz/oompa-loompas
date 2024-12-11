import { RootState } from 'src/store';
import { mockOompaLoompa1, mockOompaLoompa2 } from './oompaLoompas';

export const mockInitialState = {
  oompaLoompasList: {
    data: {
      total: 0,
      current: 0,
      resultsByPage: {},
    },
    loading: false,
    error: false,
  },
};

export const mockLoadedState: RootState = {
  oompaLoompasList: {
    data: {
      total: 2,
      current: 2,
      resultsByPage: {
        1: [mockOompaLoompa1],
        2: [mockOompaLoompa2],
      },
    },
    loading: false,
    error: false,
  },
  oompaLoompasDetail: {
    data: {},
    loading: false,
    error: false,
  },
  _persist: { version: -1, rehydrated: true },
} as RootState;
