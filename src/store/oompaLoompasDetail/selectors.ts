import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const selectOompaLoompasDetail = (state: RootState) => state.oompaLoompasDetail;

export const selectOompaLoompaById = (id: number) =>
  createSelector([selectOompaLoompasDetail], oompaLoompasDetail => {
    return oompaLoompasDetail.data[id];
  });
