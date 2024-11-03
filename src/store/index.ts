import { combineReducers, configureStore } from '@reduxjs/toolkit';
import oompaLoompasReducer from './oompaLoompas/slice';

const rootReducer = combineReducers({
  oompaLoompas: oompaLoompasReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
