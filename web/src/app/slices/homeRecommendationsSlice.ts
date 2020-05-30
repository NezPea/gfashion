import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import {
  HomeRecommendationsState,
  AxiosMiddlewareActionMeta,
  AxiosMiddlewareActionError,
  HomepageBrand,
  HomeRecommendations,
  HomepageDesigner
} from '../types'

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
    },
    followBrand: (state, action: PayloadAction<HomepageBrand, string>) => {
      let following = state.recommendations?.followingBrands

      return {
        recommendations: {
          ...state.recommendations,
          followingBrands: following
            ? following.concat([action.payload])
            : [action.payload]
        } as HomeRecommendations
      }
    },
    followDesigner: (
      state,
      action: PayloadAction<HomepageDesigner, string>
    ) => {
      let following = state.recommendations?.followingDesigners

      return {
        recommendations: {
          ...state.recommendations,
          followingDesigners: following
            ? following.concat([action.payload])
            : [action.payload]
        } as HomeRecommendations
      }
    }
  }
})

export const {
  request,
  success,
  fail,
  followBrand,
  followDesigner
} = homeRecommendationsSlice.actions

export const fetchHomeRecommendations = (payload: AxiosRequestConfig) => (
  dispatch: any
) => {
  dispatch({
    types: [request, success, fail],
    payload: {
      request: payload
    }
  })
}

export const doFollowBrand = (payload: HomepageBrand) => (dispatch: any) => {
  dispatch({ type: followBrand, payload })
}

export const doFollowDesigner = (payload: HomepageDesigner) => (
  dispatch: any
) => {
  dispatch({ type: followDesigner, payload })
}

export const selectHomeRecommendations = (state: RootState) =>
  state.homeRecommendations

export default homeRecommendationsSlice.reducer
