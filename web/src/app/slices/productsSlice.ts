import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ProductState } from '../types';

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
    success: (_, action: PayloadAction<AxiosResponse>) => {
      return {
        detail: action.payload.data
      }
    },
    fail: (_, action: PayloadAction<AxiosError>) => {
      return {
        error: action.payload.toJSON()
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
