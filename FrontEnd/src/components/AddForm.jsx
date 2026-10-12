import { useDispatch } from "react-redux";
import { insertBook } from "../store/insertBook.js";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useRef } from "react";

export default function AddForm() {
  const dispatch = useDispatch();
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(title.current.value);
    const data = {
      title: title.current.value,
      price: Number(price.current.value),
      description: description.current.value,
      id: "1",
    };
    dispatch(insertBook(data));
    title.current.value = null;
    price.current.value = null;
    description.current.value = null;
  }
  return (
    <Box
      component="form"
      sx={{
        width: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={3}>
        Insert Book
      </Typography>

      <TextField
        label="title"
        variant="outlined"
        fullWidth
        margin="normal"
        inputRef={title}
      />

      <TextField
        label="price"
        type="number"
        fullWidth
        margin="normal"
        inputRef={price}
      />

      <TextField
        label="description"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        inputRef={description}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        submit
      </Button>
    </Box>
  );
}
