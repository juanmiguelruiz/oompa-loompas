import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const selectOompaLoompas = (state: RootState) => state.oompaLoompas;

export const selectOompaLoompasByPage = (page: number) =>
  createSelector([selectOompaLoompas], oompaLoompas => {
    const accumulatedResults = Object.entries(oompaLoompas.data?.resultsByPage)
      .filter(([pageNum]) => Number(pageNum) <= page)
      .flatMap(([, results]) => results);
    return {
      data: accumulatedResults,
      loading: oompaLoompas.loading,
    };
  });

export const selectOompaLoompaById = (id: number) =>
  createSelector([selectOompaLoompas], oompaLoompas => {
    const accumulatedResults = Object.values(oompaLoompas.data?.resultsByPage).flatMap(
      results => results
    );
    return accumulatedResults.find(oompaLoompa => oompaLoompa.id === id);
  });
