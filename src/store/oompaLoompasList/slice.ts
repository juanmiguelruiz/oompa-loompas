import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { OompaLoompasService } from 'services/oompaLompas';
import { OompaLoompasResponse } from 'types';
import { RootState } from '../index';
import { ActionTypes, OompaLoompasListState, Slices } from './types';

export const fetchOompaLoompas = createAsyncThunk<
  OompaLoompasResponse,
  number,
  { state: RootState }
>(ActionTypes.FETCH_OOMPA_LOOMPAS_LIST, async (page: number = 1, { getState }) => {
  const state = getState();
  if (
    state.oompaLoompasList.data.resultsByPage[page] &&
    page <= state.oompaLoompasList.data.current
  ) {
    return {
      current: state.oompaLoompasList.data.current,
      total: state.oompaLoompasList.data.total,
      results: state.oompaLoompasList.data.resultsByPage[page],
    };
  }
  return await OompaLoompasService.getOompaLoompasList(page);
});

export const initialState: OompaLoompasListState = {
  data: { total: 0, current: 0, resultsByPage: {} },
  loading: false,
  error: false,
};

const oompaLoompaListSlice = createSlice({
  name: Slices.OOMPA_LOOMPAS_LIST,
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

export default oompaLoompaListSlice.reducer;
