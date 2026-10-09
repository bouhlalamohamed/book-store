import { Container, Divider } from "@mui/material";

import AddForm from "./components/AddForm";
import BooksList from "./components/BooksList.jsx";
import BooksDetail from "./components/BooksDetail";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "./store/bookSlice.js";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const { isLOading, books } = useSelector((state) => state.book);
  return (
    <Container>
      <AddForm />
      <Divider orientation="horizontal" flexItem sx={{ mt: 8 }} />
      <Container sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <BooksList isLOading={isLOading} books={books} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <BooksDetail />
      </Container>
    </Container>
  );
}

export default App;
