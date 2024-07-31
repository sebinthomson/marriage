import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { HowToRegTwoTone, Rowing } from "@mui/icons-material";
import { Divider } from "@mui/material";

function RegisterHere() {
  return (
    <Stack
      spacing={2}
      useFlexGap
      sx={{ width: { xs: "100%", sm: "70%" } }}
      flexDirection={"column"}
      alignItems={"center"}
      >
      <Divider />
      <Typography
        alignSelf="center"
        component="span"
        variant="h1"
        sx={{
          color: "black",
          fontSize: "clamp(1rem, 4vw, 3rem)",
          fontWeight: "400", // Medium bold text
          color: (theme) =>
            theme.palette.mode === "light" ? "primary.main" : "primary.light",
        }}
      >
        Find Your Photos by clicking a selfie
      </Typography>
      <Divider />
      <Stack flexDirection="row">
        <HowToRegTwoTone />
        <Typography
          alignSelf="center"
          component="span"
          variant="h1"
          sx={{
            fontSize: "clamp(1.3rem, 4vw, 3rem)",
            fontWeight: "400", // Medium bold text
            color: (theme) =>
              theme.palette.mode === "light" ? "primary.main" : "primary.light",
          }}
        >
          Register now to get your photos
        </Typography>
      </Stack>
      <Typography
        textAlign="center"
        color="text.secondary"
        sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
      >
        Event photos have not been added yet. Please register yourself to get
        notified as soon as photos are added to this event
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignSelf="center"
        spacing={1}
        useFlexGap
        sx={{ pt: 2, width: { xs: "70%", sm: "auto" } }}
      >
        <Button variant="contained" color="error" >
          Register Here
        </Button>
      </Stack>
      <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
        By clicking &quot;Start now&quot; you agree to our&nbsp;
        <Link href="#" color="primary">
          Terms & Conditions
        </Link>
        .
      </Typography>
    </Stack>
  );
}

export default RegisterHere;
