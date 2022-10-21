import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Lottie from "react-lottie";
import BannerBlue from "../assets/images/lottiefiles/footer.json";
import {isMobile} from 'react-device-detect';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BannerBlue,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if(window.location.pathname == "/login" && !isMobile) return null
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      <Lottie options={defaultOptions}   />
    </ThemeProvider>
  );
}
