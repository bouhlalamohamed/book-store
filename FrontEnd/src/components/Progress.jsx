import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Progress({ sx }) {
  return (
    <Box sx={sx}>
      <CircularProgress aria-label="Loading…" />
    </Box>
  );
}
