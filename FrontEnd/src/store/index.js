import { configureStore } from "@reduxjs/toolkit";
import book from "./bookSlice.js";
// import insertBook from "./insertBook.js";
import readBook from "./readBoook.js";

export default configureStore({
  reducer: {
    book,
    // insertBook,
    readBook,
  },
});
