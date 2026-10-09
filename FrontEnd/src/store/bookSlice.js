import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state

// Define the initial state using that type
const initialState = {
  books: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = bookSlice.actions;

export default bookSlice.reducer;
