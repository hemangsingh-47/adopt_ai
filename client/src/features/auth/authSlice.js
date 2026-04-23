import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService.js';
import { setToken, setUser, getToken, getUser, removeToken, removeUser } from '../../utils/storage.js';

const initialState = {
  user: getUser(),
  token: getToken(),
  isLoading: false,
  isError: false,
  message: '',
};

// Register
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const data = await authService.register(userData);
      setToken(data.token);
      setUser({ id: data._id, name: data.name, email: data.email });
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const data = await authService.login(userData);
      setToken(data.token);
      setUser({ id: data._id, name: data.name, email: data.email });
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      removeToken();
      removeUser();
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.isError = false;
      state.message = '';
    },
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { id: action.payload._id, name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { id: action.payload._id, name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { logout, reset } = authSlice.actions;
export default authSlice.reducer;
