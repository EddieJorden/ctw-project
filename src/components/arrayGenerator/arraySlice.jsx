/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const LEN = 1000;
const array = new Array(LEN).fill({
  name: 'default name',
  age: 'default age',
  email: 'default email',
});

const arraySlice = createSlice({
  name: 'array',
  initialState: {
    array,
  },
  reducers: {
    updateIndex(state, action) {
      state.array[action.payload.index] = action.payload;
    },
    createArray(state, action) {
      state.array = action.payload;
    },
  },
});

export const selectArray = (state) => state.array;
export const selectListItemData = (state) => state.array.array;

export const { updateIndex, createArray } = arraySlice.actions;
export default arraySlice.reducer;
