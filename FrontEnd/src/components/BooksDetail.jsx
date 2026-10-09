import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function BooksDetail() {
  return (
    <Container
      sx={{
        mt: 1,

        mx: "auto",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Books Detail
      </Typography>

      <List sx={{ width: "100%" }}>
        <ListItem
          sx={{
            border: "1px solid #ddd",
            borderRadius: 1,
            py: 1,
          }}
        >
          <ListItemText primary="Cras justo odio" />
        </ListItem>
      </List>
    </Container>
  );
}
