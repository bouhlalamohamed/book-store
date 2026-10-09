import { Container, Divider } from "@mui/material";

import AddForm from "./components/AddForm";
import BooksList from "./components/BooksList.jsx";
import BooksDetail from "./components/BooksDetail";
function App() {
  console.log("eeeeeeeeee");

  return (
    <Container>
      <AddForm />
      <Divider orientation="horizontal" flexItem sx={{ mt: 8 }} />
      <Container sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <BooksList />
        <Divider orientation="vertical" variant="middle" flexItem />
        <BooksDetail /> 
      </Container>
    </Container>
  );
}

export default App;
