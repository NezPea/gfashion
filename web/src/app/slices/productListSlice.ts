import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ProductListState, AxiosMiddlewareActionMeta, AxiosMiddlewareActionError } from '../types';

const initialState: ProductListState = {
  detail: null,
  isLoading: false,
  error: ''
}

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    request: () => {
      return {
        isLoading: true
      }
    },
    success: {
      reducer: (_, action: PayloadAction<AxiosResponse, string, AxiosMiddlewareActionMeta, AxiosMiddlewareActionError>) => {
        return {
          detail: action.payload.data
        }
      },
      prepare: (payload, meta, error) => {
        return {
          payload,
          meta,
          error
        }
      }
    },
    fail: {
      reducer: (_, action: PayloadAction<AxiosResponse, string, AxiosMiddlewareActionMeta, AxiosMiddlewareActionError>) => {
        return {
          error: action.error
        }
      },
      prepare: (payload, meta, error) => {
        return {
          payload,
          meta,
          error
        }
      }
    }
  }
})

export const { request, success, fail } = productListSlice.actions;

export const fetchProductList = (payload: AxiosRequestConfig) => (dispatch: any) => {
  dispatch({
    types: [request, success, fail],
    payload: {
      request: payload
    }
  })
}

export const selectProductList = (state: RootState) => state.productList;

export default productListSlice.reducer;
