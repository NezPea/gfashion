import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HomeRecommendationsState, AxiosMiddlewareActionMeta, AxiosMiddlewareActionError } from '../types';

const initialState: HomeRecommendationsState = {
  recommendations: null,
  isLoading: false,
  error: ''
}

export const homeRecommendationsSlice = createSlice({
  name: 'homeRecommendations',
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
          recommendations: action.payload.data
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

export const { request, success, fail } = homeRecommendationsSlice.actions;

export const fetchHomeRecommendations = (payload: AxiosRequestConfig) => (dispatch: any) => {
  dispatch({
    types: [request, success, fail],
    payload: {
      request: payload
    }
  })
}

export const selectHomeRecommendations = (state: RootState) => state.homeRecommendations;

export default homeRecommendationsSlice.reducer;
