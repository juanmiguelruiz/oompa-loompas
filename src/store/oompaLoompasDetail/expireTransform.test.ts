import { configureStore, Reducer } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { AppDispatch, RootState } from '../index';
import oompaLoompaListSlice, { fetchOompaLoompaById, initialState } from './slice';
import { oompaLoompaExpireTransform, EXPIRATION_TIME } from './expireTransform';
import { OompaLoompasDetailState, Slices } from './types';

jest.useFakeTimers();

jest.mock('redux-persist/lib/storage', () => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => Promise.resolve(store[key] || null),
    setItem: (key: string, value: string) => {
      store[key] = value;
      return Promise.resolve();
    },
    removeItem: (key: string) => {
      delete store[key];
      return Promise.resolve();
    },
    clear: () => {
      store = {};
      return Promise.resolve();
    },
  };
});

jest.mock('services/oompaLompas', () => ({
  OompaLoompasService: {
    getOompaLoompaById: jest.fn().mockResolvedValue({
      id: 1,
      first_name: 'Oompa',
      last_name: 'Loompa',
    }),
  },
}));

describe('Redux-persist expiration', () => {
  let store: ReturnType<typeof configureStore>;
  let persistor: ReturnType<typeof persistStore>;
  let persistedReducer: Reducer<OompaLoompasDetailState & PersistPartial>;

  beforeEach(() => {
    const persistConfig = {
      key: 'root',
      version: 1,
      storage,
      whitelist: [Slices.OOMPA_LOOMPAS_DETAIL],
      transforms: [oompaLoompaExpireTransform],
    };

    persistedReducer = persistReducer(persistConfig, oompaLoompaListSlice);

    store = configureStore({
      reducer: {
        oompaLoompasDetail: persistedReducer,
      },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });

    persistor = persistStore(store);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should retain state within the expiration time', async () => {
    await (store.dispatch as AppDispatch)(fetchOompaLoompaById(1));

    const state = store.getState() as RootState & { oompaLoompasDetail: PersistPartial };
    expect(state.oompaLoompasDetail.data['1'].id).toBe(1);
    expect(state.oompaLoompasDetail.data['1'].first_name).toEqual('Oompa');
    expect(state.oompaLoompasDetail.data['1'].last_name).toEqual('Loompa');
  });

  it('should reset state after expiration time', async () => {
    await (store.dispatch as AppDispatch)(fetchOompaLoompaById(1));
    await persistor.flush();

    jest.advanceTimersByTime(EXPIRATION_TIME + 1);

    persistor.pause();
    await persistor.purge();

    const newStore = configureStore({
      reducer: {
        oompaLoompasDetail: persistedReducer,
      },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });

    const newPersistor = persistStore(newStore);
    await new Promise(resolve => newPersistor.subscribe(() => resolve(undefined)));

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _persist: _, ...state } = newStore.getState()
      .oompaLoompasDetail as OompaLoompasDetailState & PersistPartial;
    expect(state).toEqual(initialState);
  });
});
