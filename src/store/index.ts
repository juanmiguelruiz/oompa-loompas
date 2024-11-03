import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import oompaLoompasReducer from './oompaLoompas/slice';
import { Slices } from './oompaLoompas/types';
import { oompaLoompaExpireTransform } from './oompaLoompas/expireTransform';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [Slices.OOMPA_LOOMPAS],
  transforms: [oompaLoompaExpireTransform],
};

const rootReducer = combineReducers({
  oompaLoompas: oompaLoompasReducer,
});

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
