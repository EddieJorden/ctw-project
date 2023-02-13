import { configureStore } from '@reduxjs/toolkit';
import arraySlice from '../components/arrayGenerator/arraySlice';
import filterSlice from '../components/filterComponent/filterSlice';

export const store = configureStore({
	reducer: {
		array: arraySlice,
		filter: filterSlice,
	},
});

export default store;
