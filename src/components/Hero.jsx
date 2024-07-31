import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Hero() {
  return (
    <Paper
      sx={{
        height: "12rem",
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 2,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(images/invite.jpeg)`,
        border: "5px solid white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              textAlign: "center", // Center the text horizontally
              height: "100%", // Make the Box take the full height of the Paper
              display: "flex",
              alignItems: "flex-end", // Align text to the bottom
              justifyContent: "center", // Center the text horizontally
            }}
          >
            <Typography
              variant="h4" // Increased font size
              color="inherit"
              sx={{
                fontFamily: "'Dancing Script', cursive", // Custom font for stylish text
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)", // Text shadow for depth
                letterSpacing: "0.1em", // Space between letters
                backgroundColor: "rgba(0,0,0,0.0)", // Semi-transparent background
                padding: "6.5rem 1rem", // Padding around the text
                borderRadius: "10px", // Rounded corners
              }}
            >
              John Weds Jane
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
