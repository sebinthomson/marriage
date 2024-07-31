import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Instagram, Facebook } from "@mui/icons-material";

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 4, sm: 5 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" underline="hover" fontSize={"1rem"}>
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" underline="hover" fontSize={"1rem"}>
            Terms of Service
          </Link>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {"Copyright © "}
            <Link underline="hover" fontSize={"1rem"}>
              marriage.com
            </Link>
          </Typography>
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href=""
            aria-label=""
            sx={{ alignSelf: "center" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            href=""
            aria-label=""
            sx={{ alignSelf: "center" }}
          >
            <Facebook />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
