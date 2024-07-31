import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { HowToRegTwoTone } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function RegisterHere() {
  const navigate = useNavigate();

  const handleRegisterPage = () => {
    navigate("/register");
  };

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
        <HowToRegTwoTone color="primary" />
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegisterPage}
        >
          Register Here
        </Button>
      </Stack>
    </Stack>
  );
}

export default RegisterHere;
