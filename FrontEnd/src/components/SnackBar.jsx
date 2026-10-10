import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SnackBar({ errorFetch }) {
  return (
    <div>
      <Snackbar open={errorFetch ? true : false} autoHideDuration={6000}>
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          check your conexion please
        </Alert>
      </Snackbar>
    </div>
  );
}
