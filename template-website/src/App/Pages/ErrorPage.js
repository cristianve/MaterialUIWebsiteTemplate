import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Lottie from "react-lottie";
import BannerBlue from "../../assets/images/lottiefiles/404.json";
import { isMobile } from "react-device-detect";

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Lottie options={defaultOptions} width={500} height={500} />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
