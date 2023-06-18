import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

interface SuperBigAlertProps {
  title: string;
  message?: string;
}

function SuperBigAlert({title, message}: SuperBigAlertProps) {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h1" fontWeight="bold">{title}</Typography>
      <Typography>{message}</Typography>
    </Stack>
  )
}

export default SuperBigAlert;
