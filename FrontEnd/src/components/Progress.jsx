import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";

export default function Progress({ sx }) {
  return (
    <Box
      sx={{
        display: "flex",
        mx: "auto",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress aria-label="Loading…" />
    </Box>
  );
}
