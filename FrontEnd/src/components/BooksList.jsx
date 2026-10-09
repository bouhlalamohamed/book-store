import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DeleteIcon from "@mui/icons-material/Delete";
import Progress from "./Progress";

export default function BooksList() {
  return (
    <Container sx={{ mt: 1 }}>
      <Progress sx={{ display: "none" }} />
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Books List
      </Typography>

      <List>
        <ListItem
          sx={{
            border: "1px solid #ddd",
            borderRadius: 1,
            py: 1,
          }}
          secondaryAction={
            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<MenuBookIcon />}
              >
                Read
              </Button>

              <Button
                variant="contained"
                color="error"
                size="small"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Stack>
          }
        >
          <ListItemText
            primary=",d,d,d kdjdkd idjddkd djdkdkdd kdkdkd kddkd dsdd didjddkd djdkdkdd kdkdkd kddkd dsdd didjddkd djdkdkdd kdkdkd kddkd dsdd didjddkd djdkdkdd kdkdkd kddkd dsdd dsddsd  dffdff fdfdf "
            sx={{
              maxHeight: "50px",
              maxWidth: "260px",
              overflow: "scroll",
              scrollbarWidth: "none",
            }}
          />
        </ListItem>
      </List>
    </Container>
  );
}
