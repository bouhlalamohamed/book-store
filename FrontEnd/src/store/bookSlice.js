import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { startTransition } from "react";

const getBooks = createAsyncThunk("book/getBooks", async (arg, thunkAPT) => {
  try {
    const res = await fetch("http://localhost:3005/books");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  books: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        console.log(action);
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(getBooks.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export const { increment, decrement, incrementByAmount } = bookSlice.actions;

export default bookSlice.reducer;
