import { combineReducers, configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import productReducer from './slices/productsSlice'
import gclubReducer from './slices/gclubSlice'
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS_OVERRIDE || process.env.REACT_APP_API_ADDRESS,
  responseType: 'json'
});

const middleware = [...getDefaultMiddleware(), logger, axiosMiddleware(client)]

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  gclub: gclubReducer
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
