import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { getRecommendations } from '../../services/dataProvider';

interface RecommendationsState {
  designers?: Array<{name: string}>;
  products?: Array<{name: string, isFeatured: boolean}>;
  brands?: Array<{name: string}>;
  isRequesting: boolean;
  error?: string | null;
}

interface UserInfo {
  name: string;
  email: string;
}

interface fetchRecommendationsError {
  error: string;
}

interface fetchRecommendationsPayload {}
interface fetchRecommendationsResponse {
  designers?: Array<{name: string}>;
  products?: Array<{name: string, isFeatured: boolean}>;
  brands?: Array<{name: string}>;
}

const initialState: RecommendationsState = {
  designers: [],
  products: [],
  brands: [],
  isRequesting: false,
  error: null
}

export const recommendationsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchRecommendationsRequest: (state, action) => {
      return {
        isRequesting: true
      }
    },
    fetchRecommendationsSuccess: (state, action: PayloadAction<fetchRecommendationsResponse>) => {
      return {
        ...action.payload,
        isRequesting: false
      }
    },
    fetchRecommendationsFailure: (state, action: PayloadAction<fetchRecommendationsError>) => {
      return {
        isRequesting: false,
        error: action.payload.error
      }
    }}
})

export const { fetchRecommendationsRequest, fetchRecommendationsSuccess, fetchRecommendationsFailure } = recommendationsSlice.actions;

export const fetchRecommendations = (): AppThunk => dispatch => {
    dispatch(fetchRecommendationsRequest({}))
    getRecommendations().then((res: fetchRecommendationsResponse) => {
        dispatch(fetchRecommendationsSuccess({
            ...res
        }))
    }, (err: fetchRecommendationsError) => {
        dispatch(fetchRecommendationsFailure(err))
    })
}

export const selectRecommendations = (state: RootState) => state.recommendations;

export default recommendationsSlice.reducer;
