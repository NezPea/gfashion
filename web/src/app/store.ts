import { combineReducers, configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import productReducer from './slices/productsSlice'
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import configs from './configs';

const client = axios.create({
  baseURL: configs()?.api_address,
  responseType: 'json'
});

const middleware = [...getDefaultMiddleware(), logger, axiosMiddleware(client)]

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer
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
