import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../store/bookSlice.js";

export const deleteBooks = createAsyncThunk(
  "deleteBooks",
  async (arg, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    // console.log(arg.id)
    try {
      const response = await fetch(`http://localhost:3005/books/${arg.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(getBooks());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
