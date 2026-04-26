import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice.js';
import campaignReducer from '../features/campaign/campaignSlice.js';
import aiReducer from '../features/ai/aiSlice.js';
import notificationReducer from '../features/notification/notificationSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    campaign: campaignReducer,
    ai: aiReducer,
    notification: notificationReducer,
  },
});

export default store;
