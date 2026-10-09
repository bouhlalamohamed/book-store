import { configureStore } from "@reduxjs/toolkit";
import book from "./bookSlice.js";

export default configureStore({
  reducer: {
    book,
  },
});
