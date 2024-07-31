import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Hero from "../../components/Hero.jsx";
import Footer from "../../components/Footer.jsx";
import RegisterHere from "../../components/RegisterHere.jsx";
import Header from "../../components/Header.jsx";

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          zIndex: 0,
          "&::before": {
            content: '""',
            backgroundImage: "url('images/background-image.jpg')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, // Adjust the opacity as needed
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          },
        }}
      >
        <Header />
        <Hero />
        <RegisterHere />
        <Footer />
      </Box>
    </>
  );
}
