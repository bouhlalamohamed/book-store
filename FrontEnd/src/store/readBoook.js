import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const readBook = createSlice({
  name: "readData",
  initialState: { Readed: {} },
  reducers: {
    handlleRead: (state, { payload }) => {
      state.Readed = payload;
    },
  },
});

export const { handlleRead } = readBook.actions;
export default readBook.reducer;
