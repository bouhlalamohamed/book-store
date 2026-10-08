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
import React from "react";

export default function AddForm() {
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

      <TextField label="title " variant="outlined" fullWidth margin="normal" />

      <TextField label="price" type="number" fullWidth margin="normal" />

      <TextField
        label="description"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        submit
      </Button>
    </Box>
  );
}
