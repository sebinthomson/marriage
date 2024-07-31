import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Hero from "../../components/Hero.jsx";
import Footer from "../../components/Footer.jsx";
import RegisterHere from "../../components/RegisterHere.jsx";
import { Divider } from "@mui/material";

export default function LandingPage() {
  return (
    <>
      <CssBaseline />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <RegisterHere />
        <Divider />
        {/* <Footer /> */}
      </Box>
    </>
  );
}
