import { configureStore } from '@reduxjs/toolkit';
import { mockOompaLoompa1, mockOompaLoompasListResponse } from 'tests/mocks/oompaLoompas';
import reducer, { fetchOompaLoompas, initialState } from './slice';

describe('oompaLoompas slice', () => {
  let store: ReturnType<
    typeof configureStore<{
      oompaLoompas: ReturnType<typeof reducer>;
    }>
  >;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        oompaLoompas: reducer,
      },
      preloadedState: {
        oompaLoompas: initialState,
      },
    });
  });

  it('should handle initial state', () => {
    expect(store.getState().oompaLoompas).toEqual(initialState);
  });

  it('should handle fetchOompaLoompas.pending', () => {
    store.dispatch({ type: fetchOompaLoompas.pending.type });
    expect(store.getState().oompaLoompas.loading).toBe(true);
  });

  it('should handle fetchOompaLoompas.fulfilled', () => {
    store.dispatch({
      type: fetchOompaLoompas.fulfilled.type,
      payload: mockOompaLoompasListResponse,
    });

    expect(store.getState().oompaLoompas).toEqual({
      data: {
        current: mockOompaLoompasListResponse.current,
        total: mockOompaLoompasListResponse.total,
        resultsByPage: {
          [mockOompaLoompasListResponse.current]: mockOompaLoompasListResponse.results,
        },
      },
      loading: false,
      error: false,
    });
  });

  it('should handle fetchOompaLoompas.rejected', () => {
    store.dispatch({ type: fetchOompaLoompas.rejected.type });

    expect(store.getState().oompaLoompas).toEqual({
      ...initialState,
      loading: false,
      error: true,
    });
  });

  it('should preserve previous results when loading a new page', () => {
    store.dispatch({
      type: fetchOompaLoompas.fulfilled.type,
      payload: {
        current: 1,
        total: 2,
        results: [mockOompaLoompa1],
      },
    });

    store.dispatch({
      type: fetchOompaLoompas.fulfilled.type,
      payload: mockOompaLoompasListResponse,
    });

    expect(store.getState().oompaLoompas.data.resultsByPage).toHaveProperty('1');
    expect(store.getState().oompaLoompas.data.resultsByPage).toHaveProperty('2');
  });
});
