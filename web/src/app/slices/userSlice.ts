import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

interface UserState {
  name?: string;
  email?: string;
  isLoggingIn?: boolean;
  loggingError?: string;
  isLoggedOut?: boolean;
}

interface UserInfo {
  name: string;
  email: string;
}

interface UserError {
  error: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  isLoggingIn: false,
  loggingError: '',
  isLoggedOut: true
}

// const loginRequest = createAction('user/login');
// const loginSuccess = createAction('user/login/success', function prepare(info: UserInfo) {
//   return {
//     payload: info
//   }
// });
// const loginFailure = createAction('user/login/failure', function prepare(error: UserError) {
//   return {
//     payload: error
//   }
// });
// const logout = createAction('user/logout');

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      return {
        isLoggingIn: true
      }
    },
    loginSuccess: (state, action: PayloadAction<UserInfo>) => {
      return {
        isLoggingIn: false,
        isLoggedOut: false,
        name: action.payload.name,
        email: action.payload.email
      }
    },
    loginFailure: (state, action: PayloadAction<UserError>) => {
      return {
        loggingError: action.payload.error
      }
    },
    logout: (state, action) => {
      return {
        isLoggedOut: true
      }
    }}
})

export const { loginRequest, loginSuccess, loginFailure, logout } = userSlice.actions;

interface LoginRequestPayload {
  username: string;
  password: string;
}

export const userLogin = (payload: LoginRequestPayload): AppThunk => dispatch => {
  dispatch(loginRequest({}))
  setTimeout(() => {
    dispatch(loginSuccess({name: payload.username, email: 'shit@x.com'}));
  }, 2000);
};

export const userLogout = (): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(logout)
  }, 1000)
}

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
