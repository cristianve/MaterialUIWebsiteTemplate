import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CardImage from "../assets/images/card.jpg";
import Gradient from "rgt";

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
      <Container maxWidth="md" marginTop={2}>
        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item md={6} xs={6} sm={6}>
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
          </Grid>

          <Grid item md={6} xs={6} sm={6}>
            <Item component={"span"}>
              <CardMedia
                component="img"
                image={CardImage} // require image
                title="Contemplative Reptile"
                style={{
                  borderRadius: "8px",
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
