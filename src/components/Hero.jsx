import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/public/images/invite.jpeg"
          sx={{
            width: { xs: "100%", sm: "80%", md: "60%" }, // Adjust the width as per screen size
            height: "auto", // Maintain the aspect ratio
            maxWidth: "100%", // Ensure the image doesn't exceed the container's width
          }}
        />
        {/* <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            borderColor={"black"}
            sx={{
              // border: "2px solid black", // Border thickness and color
              padding: "2px 12px", // Padding inside the border
              borderRadius: "8px", // Optional: adds rounded corners
              backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: adds a background color
              color: "black", // Text color
            }}
          >
            John weds Jane{" "}
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
}
