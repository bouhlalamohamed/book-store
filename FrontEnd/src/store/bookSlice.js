import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { startTransition } from "react";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (arg, thunkAPT) => {
    const { rejectWithValue } = thunkAPT;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  books: [],
  isLOading: false,
  errorFetch: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.isLOading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLOading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLOading = false;
        state.errorFetch = true;
      });
  },
});

export const { increment, decrement, incrementByAmount } = bookSlice.actions;

export default bookSlice.reducer;
