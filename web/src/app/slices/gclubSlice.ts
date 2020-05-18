import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { gclub } from '../types';
/**
 * gclub
 */
const initialState: gclub = {
  name: '',
  email: '',

}

export const gclubSlice = createSlice({
  name: 'gclub',
  initialState,
  reducers: {

    mergeRequertData: () => {

    },
    mergeRequertDataSuccess: (_, action: PayloadAction<gclub>) => {
      return {
        name: action.payload.name,
        email: ''
      }
    }
  }
})

export const { mergeRequertData, mergeRequertDataSuccess } = gclubSlice.actions;

interface GclubRequestPayload {
  username: string;
  password: string;
}

export const fetchGclubData = (payload: GclubRequestPayload): AppThunk => dispatch => {
  dispatch(mergeRequertData())
  setTimeout(() => {
    dispatch(mergeRequertDataSuccess({ name: payload.username, email: 'moon@x.com' }));
  }, 2000);
};



export const selectGclub = (state: RootState) => state.gclub;

export default gclubSlice.reducer;
