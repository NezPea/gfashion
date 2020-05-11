import { combineReducers, configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import recommendationsReducer from './slices/recommendationsSlice';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger]

const rootReducer = combineReducers({
  user: userReducer,
  recommendations: recommendationsReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
