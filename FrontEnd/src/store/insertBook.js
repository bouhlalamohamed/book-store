import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "./bookSlice.js";
export const insertBook = createAsyncThunk(
  "insertbook",
  async (booData, thunkAPI) => {
    const { rejectWithValue, dispatch, getState } = thunkAPI;
    try {
      const res = fetch("http://localhost:3005/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booData),
      });
      dispatch(getBooks());
      const data = (await res).json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const insertBookSlice = createSlice({
//   name: "book",
//   initialState: {
//     books: [],
//     isLOading: false,
//     errorFetch: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(insertBook.pending, (state, action) => {})
//       .addCase(insertBook.fulfilled, (state, action) => {})
//       .addCase(insertBook.rejected, (state, action) => {});
//   },
// });

// export default insertBookSlice.reducer;
