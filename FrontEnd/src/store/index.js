import { configureStore } from "@reduxjs/toolkit";
import book from "./bookSlice.js";
// import insertBook from "./insertBook.js";
import readBook from "./readBoook.js";
import iteamBook from "../store/updateBook.js";

export default configureStore({
  reducer: {
    book,
    // insertBook,
    readBook,
    iteamBook,
  },
});
