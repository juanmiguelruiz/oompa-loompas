import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { OompaLoompasService } from 'services/oompaLompas';
import { OompaLoompa } from 'types';
import { RootState } from '../index';
import { ActionTypes, OompaLoompasDetailState, Slices } from './types';

export const fetchOompaLoompaById = createAsyncThunk<OompaLoompa, number, { state: RootState }>(
  ActionTypes.FETCH_OOMPA_LOOMPA_BY_ID,
  async (id: number, { getState }) => {
    const state = getState();
    if (state.oompaLoompasDetail.data[id]) {
      return state.oompaLoompasDetail.data[id];
    }

    return { id, ...(await OompaLoompasService.getOompaLoompaById(id)) };
  }
);

export const initialState: OompaLoompasDetailState = {
  data: {},
  loading: false,
  error: false,
};

const oompaLoompaDetailSlice = createSlice({
  name: Slices.OOMPA_LOOMPAS_DETAIL,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchOompaLoompaById.pending, state => {
        state.loading = true;
      })
      .addCase(fetchOompaLoompaById.fulfilled, (state, action: PayloadAction<OompaLoompa>) => {
        state.loading = false;
        state.data = {
          ...state.data,
          [action.payload.id]: action.payload,
        };
      })
      .addCase(fetchOompaLoompaById.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default oompaLoompaDetailSlice.reducer;
