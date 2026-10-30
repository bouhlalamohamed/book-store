import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DeleteIcon from "@mui/icons-material/Delete";
import Progress from "./Progress";
import { deleteBooks } from "../store/deleteBooks.js";
import { useDispatch } from "react-redux";
import { handlleRead } from "../store/readBoook.js";
import { iteamBook, setUpdate } from "../store/updateBook.js";

export default function BooksList({ isLOading, books }) {
  const dispatch = useDispatch();

  const bookData =
    books.length > 0
      ? books.map((iteam) => (
          <>
            <ListItem
              sx={{
                border: "1px solid #ddd",
                borderRadius: 1,
                py: 1,
              }}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton
                    aria-label=""
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => {
                      dispatch(handlleRead({ iteam }));
                    }}
                  >
                    <MenuBookIcon />
                  </IconButton>

                  <IconButton
                    aria-label=""
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => {
                      dispatch(deleteBooks({ id: iteam.id }));
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    aria-label=""
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => {
                      dispatch(iteamBook(iteam));
                      // dispatch(setUpdate());
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Stack>
              }
            >
              <ListItemText
                primary={iteam.title}
                sx={{
                  maxHeight: "50px",
                  maxWidth: "260px",
                  overflow: "scroll",
                  scrollbarWidth: "none",
                  mt: 3,
                }}
              />
            </ListItem>
          </>
        ))
      : "no books to show";
  return (
    <Container sx={{ mt: 1 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Books List
      </Typography>

      {isLOading ? (
        <Progress />
      ) : (
        <>
          <List>{bookData}</List>
        </>
      )}
    </Container>
  );
}
