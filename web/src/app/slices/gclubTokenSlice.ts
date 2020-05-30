import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import {
  gclubTokenState,
  AxiosMiddlewareActionMeta,
  AxiosMiddlewareActionError
} from '../types'

const initialState: gclubTokenState = {
  isLoading: false,
  jwtToken: ''
}

export const gclubTokenSlice = createSlice({
  name: 'gclubToken',
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
        return {
          isLoading: false,
          jwtToken: action.payload.data.hasOwnProperty('jwtToken')
            ? action.payload.data.jwtToken
            : ''
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

export const { request, success, fail } = gclubTokenSlice.actions

export const fetchGClubtoken = (payload: AxiosRequestConfig) => (
  dispatch: any
) => {
  dispatch({
    types: [request, success, fail],
    payload: {
      request: payload
    }
  })
}

export const selectGClubToken = (state: RootState) => state.productList

export default gclubTokenSlice.reducer
