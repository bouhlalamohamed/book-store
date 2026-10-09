import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = bookSlice.actions;

export default bookSlice.reducer;
