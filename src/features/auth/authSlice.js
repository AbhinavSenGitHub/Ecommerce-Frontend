import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { checkAuth, checkUser, createUser, signOut } from './authAPI'
const initialState = {
  loggedInUserToken: null,
  status: 'idle',
  userChecked: false,
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
)

export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginiInfo, {rejectWithValue}) => {
    try{
      const response = await checkUser(loginiInfo);
      return response.data;
    }catch (error) {
      console.log(error);
      return rejectWithValue(error)
    }

  }
)

export const checkAuthAsync = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try{
      const response = await checkAuth();
      return response.data;
    }catch (error) {
      console.log(error)
    }

  }
)
export const signOutAsync = createAsyncThunk(
  'user/signOut',
  async (userId) => {
    const response = await signOut(userId);
    return response.data;
  }
)
export const authSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = null;
      })
      .addCase(checkAuthAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkAuthAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
        state.userChecked = true;
      })
      .addCase(checkAuthAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.userChecked = true;
      })
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUserToken
export const selectError = (state) => state.auth.error
export const selectUserChecked = (state) => state.auth.userChecked
export const { increment } = authSlice.actions;

export default authSlice.reducer;
