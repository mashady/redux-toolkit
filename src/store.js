import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import langReducer from './langSlice';
export const store = configureStore({
  reducer: {
    posts: postReducer,
    language: langReducer,
  },
});
