import { createSelector } from '@reduxjs/toolkit';
import { OompaLoompa } from 'src/types';
import { RootState } from 'store';

export const selectOompaLoompas = (state: RootState) => state.oompaLoompas;

export const selectOompaLoompasByPage = (page: number) =>
  createSelector([selectOompaLoompas], oompaLoompas => {
    const uniqueResults = Array.from(
      new Set(
        Object.entries(oompaLoompas.data?.resultsByPage || {})
          .filter(([pageNum]) => Number(pageNum) <= page)
          .flatMap(([, results]) => results)
      )
    ).reduce<OompaLoompa[]>((acc, item) => {
      if (!acc.some(existing => existing.id === item.id)) {
        acc.push(item);
      }
      return acc;
    }, []);
    return {
      data: uniqueResults,
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
