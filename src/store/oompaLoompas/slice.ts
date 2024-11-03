import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { OompaLoompasService } from 'services/oompaLompas';
import { OompaLoompasResponse } from 'types';
import { RootState } from '../index';
import { ActionTypes, OompaLoompaState, Slices } from './types';

export const fetchOompaLoompas = createAsyncThunk<
  OompaLoompasResponse,
  number,
  { state: RootState }
>(ActionTypes.FETCH_OOMPA_LOOMPAS, async (page: number = 1, { getState }) => {
  const state = getState();
  if (state.oompaLoompas.data.resultsByPage[page] && page <= state.oompaLoompas.data.current) {
    return {
      current: state.oompaLoompas.data.current,
      total: state.oompaLoompas.data.total,
      results: state.oompaLoompas.data.resultsByPage[page],
    };
  }
  return await OompaLoompasService.getOompaLoompas(page);
});

export const initialState: OompaLoompaState = {
  data: { total: 0, current: 0, resultsByPage: {} },
  loading: false,
  error: false,
};

const oompaLoompaSlice = createSlice({
  name: Slices.OOMPA_LOOMPAS,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchOompaLoompas.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchOompaLoompas.fulfilled,
        (state, action: PayloadAction<OompaLoompasResponse>) => {
          state.loading = false;
          state.data = {
            current: action.payload.current,
            total: action.payload.total,
            resultsByPage: {
              ...state.data.resultsByPage,
              [action.payload.current]: action.payload.results,
            },
          };
        }
      )
      .addCase(fetchOompaLoompas.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default oompaLoompaSlice.reducer;
