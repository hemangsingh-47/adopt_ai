import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import audienceService from '../../services/audienceService';

const initialState = {
  segments: [],
  filteredSegments: [],
  loading: false,
  error: null,
  filter: 'all', // 'all', 'meta', 'google'
  searchQuery: '',
};

export const fetchSegments = createAsyncThunk(
  'audience/fetchSegments',
  async (_, thunkAPI) => {
    try {
      return await audienceService.getSegments();
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createAudienceSegment = createAsyncThunk(
  'audience/createSegment',
  async (segmentData, thunkAPI) => {
    try {
      return await audienceService.createSegment(segmentData);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const audienceSlice = createSlice({
  name: 'audience',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterSegments: (state) => {
      let result = state.segments;

      if (state.filter !== 'all') {
        const platformMatch = state.filter === 'meta' ? 'Meta Ads' : 'Google Ads';
        result = result.filter((s) => s.platform === platformMatch);
      }

      if (state.searchQuery) {
        const lowerQuery = state.searchQuery.toLowerCase();
        result = result.filter(
          (s) =>
            s.name.toLowerCase().includes(lowerQuery) ||
            s.id.toLowerCase().includes(lowerQuery)
        );
      }

      state.filteredSegments = result;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSegments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSegments.fulfilled, (state, action) => {
        state.loading = false;
        state.segments = action.payload;
        state.filteredSegments = action.payload;
      })
      .addCase(fetchSegments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createAudienceSegment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAudienceSegment.fulfilled, (state, action) => {
        state.loading = false;
        state.segments.unshift(action.payload);
        // We let the useEffect in component handle re-filtering by calling filterSegments
      })
      .addCase(createAudienceSegment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, setSearch, filterSegments } = audienceSlice.actions;
export default audienceSlice.reducer;
