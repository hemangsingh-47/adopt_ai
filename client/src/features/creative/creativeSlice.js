import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import creativeService from '../../services/creativeService.js';

export const fetchCreatives = createAsyncThunk(
  'creative/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await creativeService.getCreatives();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const uploadCreative = createAsyncThunk(
  'creative/upload',
  async (formData, thunkAPI) => {
    try {
      return await creativeService.uploadCreative(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteCreative = createAsyncThunk(
  'creative/delete',
  async (id, thunkAPI) => {
    try {
      await creativeService.deleteCreative(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const creativeSlice = createSlice({
  name: 'creative',
  initialState: {
    creatives: [],
    loading: false,
    uploading: false,
    error: null,
  },
  reducers: {
    resetError: (state) => { state.error = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreatives.pending, (state) => { state.loading = true; })
      .addCase(fetchCreatives.fulfilled, (state, action) => {
        state.loading = false;
        state.creatives = action.payload.data;
      })
      .addCase(fetchCreatives.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(uploadCreative.pending, (state) => { state.uploading = true; })
      .addCase(uploadCreative.fulfilled, (state, action) => {
        state.uploading = false;
        state.creatives.unshift(action.payload.data);
      })
      .addCase(uploadCreative.rejected, (state, action) => {
        state.uploading = false;
        state.error = action.payload;
      })
      .addCase(deleteCreative.fulfilled, (state, action) => {
        state.creatives = state.creatives.filter(c => c._id !== action.payload);
      });
  }
});

export const { resetError } = creativeSlice.actions;
export default creativeSlice.reducer;
