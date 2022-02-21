import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
      <Container maxWidth="md">
        <Paper sx={{ m: 2, borderRadius: "8px" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              sx={{ backgroundColor: "#007FFF", borderRadius: "8px" }}
            >
              <Typography
                component="h4"
                variant="h5"
                align="left"
                color="#fff"
                padding={2}
                fontWeight={700}
                lineHeight={1.235}
                font-size={"1.5625rem"}
                mt={2}
              >
                Company terms & privacy policy
              </Typography>

              <Typography
                component="p"
                variant="p"
                align="left"
                color="#fff"
                padding={2}
                fontWeight={700}
                lineHeight={1.167}
                gutterBottom
              >
                Last modified on 23 Aug, 2021
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                component="p"
                variant="p"
                align="left"
                padding={2}
                fontWeight={700}
                lineHeight={1.167}
              >
                1. What information do we collect?
              </Typography>
              <Typography
                component="p"
                variant="p"
                align="left"
                padding={2}
                fontWeight={400}
                lineHeight={1.167}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>

              <Typography
                component="p"
                variant="p"
                align="left"
                padding={2}
                fontWeight={700}
                lineHeight={1.167}
              >
                2. How do we use your information?
              </Typography>
              <Typography
                component="p"
                variant="p"
                align="left"
                padding={2}
                fontWeight={400}
                lineHeight={1.167}
                gutterBottom
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
