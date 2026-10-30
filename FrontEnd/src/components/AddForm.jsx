import { useDispatch } from "react-redux";
import { insertBook } from "../store/insertBook.js";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateBook, clearBookToUpdate } from "../store/updateBook.js";
import { iteamBook } from "../store/updateBook.js";

export default function AddForm() {
  const { iteam } = useSelector((state) => state.iteamBook);
  // console.log(isUpdate);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (Object.keys(iteam).length > 0) {
      setFormData({
        title: iteam.title || "",
        price: iteam.price || "",
        description: iteam.description || "",
        id: iteam.id || "",
      });
    } else {
      setFormData({ title: "", price: "", description: "" });
    }
  }, [iteam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.keys(iteam).length > 0) {
      dispatch(updateBook(formData));
      dispatch(clearBookToUpdate());
    } else {
      //
      dispatch(insertBook(formData));
      dispatch(clearBookToUpdate());
    }
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
        variant="outlined"
        name="title"
        fullWidth
        margin="normal"
        placeholder="title"
        value={formData.title}
        onChange={handleChange}
      />
      <TextField
        type="number"
        name="price"
        fullWidth
        margin="normal"
        placeholder="price"
        value={formData.price}
        onChange={handleChange}
      />

      <TextField
        placeholder="description"
        name="description"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={formData.description}
        onChange={handleChange}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        {/* {Object.keys(iteam).length > 0 ? "update" : "submit"} */}
        submit
      </Button>
    </Box>
  );
}
