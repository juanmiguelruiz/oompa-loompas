import { configureStore } from '@reduxjs/toolkit';
import { mockOompaLoompa1 } from 'tests/mocks/oompaLoompas';
import reducer, { fetchOompaLoompaById, initialState } from './slice';

describe('oompaLoompaDetail slice', () => {
  let store: ReturnType<
    typeof configureStore<{
      oompaLoompasDetail: ReturnType<typeof reducer>;
    }>
  >;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        oompaLoompasDetail: reducer,
      },
      preloadedState: {
        oompaLoompasDetail: initialState,
      },
    });
  });

  it('should handle initial state', () => {
    expect(store.getState().oompaLoompasDetail).toEqual(initialState);
  });

  it('should handle fetchOompaLoompaById.pending', () => {
    store.dispatch({ type: fetchOompaLoompaById.pending.type });
    expect(store.getState().oompaLoompasDetail.loading).toBe(true);
  });

  it('should handle fetchOompaLoompaById.fulfilled', () => {
    store.dispatch({
      type: fetchOompaLoompaById.fulfilled.type,
      payload: mockOompaLoompa1,
    });

    expect(store.getState().oompaLoompasDetail).toEqual({
      data: {
        [mockOompaLoompa1.id]: mockOompaLoompa1,
      },
      loading: false,
      error: false,
    });
  });

  it('should handle fetchOompaLoompaById.rejected', () => {
    store.dispatch({ type: fetchOompaLoompaById.rejected.type });

    expect(store.getState().oompaLoompasDetail).toEqual({
      ...initialState,
      loading: false,
      error: true,
    });
  });

  it('should preserve previous oompa loompa details when fetching a new one', () => {
    store.dispatch({
      type: fetchOompaLoompaById.fulfilled.type,
      payload: mockOompaLoompa1,
    });

    const mockOompaLoompa2 = { ...mockOompaLoompa1, id: 2 };
    store.dispatch({
      type: fetchOompaLoompaById.fulfilled.type,
      payload: mockOompaLoompa2,
    });

    expect(store.getState().oompaLoompasDetail.data).toHaveProperty(mockOompaLoompa1.id.toString());
    expect(store.getState().oompaLoompasDetail.data).toHaveProperty(mockOompaLoompa2.id.toString());
  });
});
