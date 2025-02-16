import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  data: [],
};

const CountSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    dataObject: (state, value) => {
      state.data = value.payload;
    },
  },
});

export const { increment, decrement, dataObject } = CountSlice.actions;
export default CountSlice.reducer;
