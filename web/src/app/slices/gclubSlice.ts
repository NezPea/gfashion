import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { gclub } from '../types';

/**
 * gclub
 */
// 默认值 initialState
const initialState: gclub = {
  name: '',
  email: '',
  isLoading: true

}
// 创建状态
/**
 * 创建状态
 * 初始值
 * actions
 * 
 */
export const gclubSlice = createSlice({
  name: 'gclub',
  initialState,
  reducers: {

    mergeRequertData: () => {

    },
    mergeRequertDataSuccess: (_, action: PayloadAction<gclub>) => {
      return {
        name: action.payload.name,
        email: '',
        isLoading: false
      }
    }
  }
})
// 结构actions并且导出
export const { mergeRequertData, mergeRequertDataSuccess } = gclubSlice.actions;

interface GclubRequestPayload {
  username?: string;
  password?: string;
  url?: string;
}
// 获取数据
export const fetchGclubData = (payload: GclubRequestPayload): AppThunk => dispatch => {
  dispatch(mergeRequertData())
  setTimeout(() => {
    dispatch(mergeRequertDataSuccess({ name: payload.username, email: 'moon@x.com', isLoading: false }));
  }, 2000);
};



export const selectGclub = (state: RootState) => state.gclub;

export default gclubSlice.reducer;
