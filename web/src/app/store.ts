import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productsSlice";
import productListReducer from "./slices/productListSlice";
import gclubReducer from "./slices/gclubSlice";
import homeRecommendationsReducer from "./slices/homeRecommendationsSlice";
import logger from "redux-logger";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

const client = axios.create({
  baseURL: "/gfashion/v1",
  responseType: "json"
});

const middleware = [
  ...getDefaultMiddleware({ serializableCheck: false }),
  logger,
  axiosMiddleware(client)
];

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  productList: productListReducer,
  gclub: gclubReducer,
  homeRecommendations: homeRecommendationsReducer
});

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
