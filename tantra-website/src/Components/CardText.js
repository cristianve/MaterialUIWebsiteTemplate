import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CardImage from "../assets/images/card.jpg";
import Gradient from "rgt";
import Divider from "@mui/material/Divider";

const theme = createTheme();

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export default function CardText() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Hero unit */}
      <Container maxWidth="md">
        <Divider variant="middle" />
        <Grid container sx={{mt:2}} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item md={6} xs={12} sm={12}>
            <Item component={"span"}>
              <Typography
                component="h3"
                variant="h4"
                align="left"
                color="text.primary"
                fontWeight={700}
                lineHeight={1.167}
                gutterBottom
              >
                The powerful and flexible theme for all kinds of{" "}
                <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
                  businesses
                </Gradient>{" "}
              </Typography>

              <Typography
                variant="h6"
                align="left"
                color="text.secondary"
                fontWeight={400}
              >
                Whether you're creating a subscription service, an on-demand
                marketplace, an e-commerce store, or a portfolio showcase,
                theFront helps you create the best possible product for your
                users.
              </Typography>
            </Item>

            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item md={4} xs={12} paddingLeft={"12px"}>
                <Typography
                  component="h3"
                  variant="h4"
                  align="left"
                  color="text.primary"
                  fontWeight={700}
                  lineHeight={1.167}
                  gutterBottom
                >
                  <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
                    50+
                  </Gradient>
                </Typography>
                <Typography
                  variant="p"
                  align="left"
                  color="text.secondary"
                  fontWeight={400}
                >
                  Component compositions, which will help you to build any page
                  easily.
                </Typography>
              </Grid>
              <Grid item md={4} xs={12} paddingLeft={"12px"}>
                <Typography
                  component="h3"
                  variant="h4"
                  align="left"
                  color="text.primary"
                  fontWeight={700}
                  lineHeight={1.167}
                  gutterBottom
                >
                  <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
                    10+
                  </Gradient>
                </Typography>
                <Typography
                  variant="p"
                  align="left"
                  color="text.secondary"
                  fontWeight={400}
                >
                  10 + landing and supported pages to Build a professional
                  website.
                </Typography>
              </Grid>
              <Grid item md={4} xs={12} paddingLeft={"12px"}>
                <Typography
                  component="h3"
                  variant="h4"
                  align="left"
                  color="text.primary"
                  fontWeight={700}
                  lineHeight={1.167}
                  gutterBottom
                >
                  <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
                    90%
                  </Gradient>
                </Typography>
                <Typography
                  variant="p"
          
                  color="text.secondary"
                  fontWeight={400}
                >
                  99% of our customers rated 5-star our themes over 5 years.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            md={6}
            xs={6}
            sm={6}
            sx={{ display: { xl: "block", md: "block", xs: "none" } }}
          >
            <Item component={"span"}>
              <CardMedia
                component="img"
                image={CardImage} // require image
                title="Contemplative Reptile"
                style={{
                  borderRadius: "8px",
                  height: "100%",
                  weight: "100%",
                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
