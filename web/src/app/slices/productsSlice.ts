import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ProductState, AxiosMiddlewareActionMeta, AxiosMiddlewareActionError } from '../types';

const initialState: ProductState = {
  detail: null,
  isLoading: false,
  error: ''
}

export const productSlice = createSlice({
  name: 'product',
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

export const { request, success, fail } = productSlice.actions;

export const fetchProductDetail = (payload: AxiosRequestConfig) => (dispatch: any) => {
  dispatch({
    types: ['product/request', 'product/success', 'product/fail'],
    payload: {
      request: payload
    }
  })
}

export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
