import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";

export default function BooksDetail() {
  const { Readed } = useSelector((state) => state.readBook);
  // console.log(Readed.iteam);

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
        {Object.keys(Readed).length > 0 ? (
          <>
            <ListItem
              sx={{
                border: "1px solid #ddd",
                borderRadius: 1,
                py: 1,
              }}
            >
              <ListItemText primary={`title: ${Readed.iteam.title}`} />
            </ListItem>
            <ListItem
              sx={{
                border: "1px solid #ddd",
                borderRadius: 1,
                py: 1,
              }}
            >
              <ListItemText primary={`price: ${Readed.iteam.price}`} />
            </ListItem>
            <ListItem
              sx={{
                border: "1px solid #ddd",
                borderRadius: 1,
                py: 1,
              }}
            >
              <ListItemText
                primary={`desciption: ${Readed.iteam.description}`}
              />
            </ListItem>{" "}
          </>
        ) : (
          <ListItem
            sx={{
              border: "1px solid #ddd",
              borderRadius: 1,
              py: 1,
            }}
          >
            <ListItemText primary="read book" />
          </ListItem>
        )}
      </List>
    </Container>
  );
}
