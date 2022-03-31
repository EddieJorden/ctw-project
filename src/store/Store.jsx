import { configureStore } from '@reduxjs/toolkit';
import arraySlice from '../components/arrayGenerator/arraySlice';

export const store = configureStore({
  reducer: {
    array: arraySlice,
  },
});

export default store;
