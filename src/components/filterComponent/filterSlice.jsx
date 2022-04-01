import { createSlice } from '@reduxjs/toolkit';

const filter = {
  nameFilter: '',
  ageFilter: '',
  emailFilter: '',
  indexFilter: null,
  active: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter,
  },
  reducers: {
    updateFilter(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.filter = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filter;
export const { updateFilter } = filterSlice.actions;
export default filterSlice.reducer;
