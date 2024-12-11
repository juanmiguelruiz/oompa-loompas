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
import oompaLoompasListReducer from './oompaLoompasList/slice';
import oompaLoompasDetailReducer from './oompaLoompasDetail/slice';
import { Slices as OompaLoompasListSlices } from './oompaLoompasList/types';
import { Slices as OompaLoompasDetailSlices } from './oompaLoompasDetail/types';
import { oompaLoompaExpireTransform } from './oompaLoompasList/expireTransform';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [
    OompaLoompasListSlices.OOMPA_LOOMPAS_LIST,
    OompaLoompasDetailSlices.OOMPA_LOOMPAS_DETAIL,
  ],
  transforms: [oompaLoompaExpireTransform],
};

const rootReducer = combineReducers({
  oompaLoompasList: oompaLoompasListReducer,
  oompaLoompasDetail: oompaLoompasDetailReducer,
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
