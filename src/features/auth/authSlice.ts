import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './authService';
import { User } from '../../types';

interface AuthState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

export const loginAsync = createAsyncThunk(
    'auth/login',
    async (credentials: any) => { 
      const response = await login(credentials.email, credentials.password);
      return response.data;
    }
  );
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder:any) => {
    builder
      .addCase(loginAsync.pending, (state:any) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state:any, action:any) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state:any, action:any) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
