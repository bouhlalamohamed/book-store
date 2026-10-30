import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../store/bookSlice.js";

export const updateBook = createAsyncThunk(
  "updateBook",
  async (updatedData, { rejectWithValue, dispatch }) => {
    const { id } = updatedData;
    try {
      const response = await fetch(`http://localhost:3005/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(updatedData),
      });
      dispatch(getBooks());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const postsSlice = createSlice({
  name: "updateBook",
  initialState: {
    isUpdate: false,
    iteam: {},
  },
  reducers: {
    iteamBook: (state, { payload }) => {
      state.iteam = payload;
    },
    clearBookToUpdate: (state, action) => {
      // console.log(action);
      state.iteam = {};
    },
    setUpdate: (state) => {
      state.isUpdate = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateBook.pending, (state, { payload }) => {
        // state.iteamUpdate = payload;
      })
      .addCase(updateBook.fulfilled, (state, action) => {})
      .addCase(updateBook.rejected, (state, action) => {});
  },
});

export const { iteamBook, clearBookToUpdate, setUpdate } = postsSlice.actions;
export default postsSlice.reducer;
