import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { startTransition } from "react";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (arg, thunkAPT) => {
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
const initialState = {
  books: null,
  isLOading: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        console.log(action);
        state.isLOading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        console.log(action);
        state.isLOading = false;
      })
      .addCase(getBooks.rejected, (state, action) => {
        console.log(action);
        state.isLOading = false;
      });
  },
});

export const { increment, decrement, incrementByAmount } = bookSlice.actions;

export default bookSlice.reducer;
