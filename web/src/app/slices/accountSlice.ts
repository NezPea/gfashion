import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
import {
  accountState,
  AxiosMiddlewareActionMeta,
  AxiosMiddlewareActionError
} from '../types'

const initialState: accountState = {
  isLoading: false
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    request: () => {
      return {
        isLoading: true
      }
    },
    success: {
      reducer: (
        _,
        action: PayloadAction<
          AxiosResponse,
          string,
          AxiosMiddlewareActionMeta,
          AxiosMiddlewareActionError
        >
      ) => {
        return {}
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
      reducer: (
        _,
        action: PayloadAction<
          AxiosResponse,
          string,
          AxiosMiddlewareActionMeta,
          AxiosMiddlewareActionError
        >
      ) => {
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

export const { request, success, fail } = accountSlice.actions

export const fetchProductDetail = (payload: AxiosRequestConfig) => (
  dispatch: any
) => {
  dispatch({
    types: [request, success, fail],
    payload: {
      request: payload
    }
  })
}

export default accountSlice.reducer
