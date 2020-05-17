import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { UserState, UserError, UserInfo } from '../types';

const initialState: UserState = {
  name: '',
  email: '',
  isLoggingIn: false,
  loggingError: '',
  isLoggedOut: true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: () => {
      return {
        isLoggingIn: true
      }
    },
    loginSuccess: (_, action: PayloadAction<UserInfo>) => {
      return {
        isLoggingIn: false,
        isLoggedOut: false,
        name: action.payload.name,
        email: action.payload.email
      }
    },
    loginFailure: (_, action: PayloadAction<UserError>) => {
      return {
        loggingError: action.payload.error
      }
    },
    logout: () => {
      return {
        isLoggedOut: true
      }
    }
  }
})

export const { loginRequest, loginSuccess, loginFailure, logout } = userSlice.actions;

interface LoginRequestPayload {
  username: string;
  password: string;
}

export const userLogin = (payload: LoginRequestPayload): AppThunk => dispatch => {
  dispatch(loginRequest())
  setTimeout(() => {
    dispatch(loginSuccess({ name: payload.username, email: 'moon@x.com' }));
  }, 2000);
};

export const userLogout = (): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(logout)
  }, 1000)
}

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
