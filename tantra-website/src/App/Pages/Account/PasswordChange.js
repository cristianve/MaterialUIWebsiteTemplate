import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CardImage from "../../../assets/images/password-reset.svg";
import Gradient from "rgt";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const theme = createTheme();

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        marginTop: 2,
      }}
    >
      <TextField fullWidth label="Password *" id="email" />
    </Box>
  );
}

export default function CardText() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Hero unit */}
      <Container maxWidth="md">
        <Grid container sx={{ mt: 8 }} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
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
                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
              />
            </Item>
          </Grid>
          
          <Grid item md={6} xs={12} sm={12}>
            <Item component={"span"}>
              <Typography
                component="h3"
                variant="h4"
                align="right"
                color="text.primary"
                fontWeight={700}
                lineHeight={1.167}
                gutterBottom
              >
                Change your{" "}
                <Gradient dir="right-to-left" from="#007FFF" to="#0059B2">
                  password
                </Gradient>{" "}

              </Typography>

              <Typography
                variant="h6"
                align="right"
                color="text.secondary"
                fontWeight={400}
              >
                Enter your current password and the newest one:
              </Typography>
              <br />

              <Typography
                variant="h8"
                align="right"
                color="text.secondary"
                fontWeight={400}
              >
                Current password:
              </Typography>

              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginTop: 2,
                }}
              >
                <TextField fullWidth label="Current Password *" type="password" id="password" />
              </Box>
              <Typography
                mt={2}
                variant="h8"
                align="left"
                color="text.secondary"
                fontWeight={400}
              >
                New password:
              </Typography>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginTop: 2,
                }}
              >
                <TextField fullWidth label="New Password *" type="password" id="password" />
              </Box>

              <Typography
                mt={2}
                variant="h8"
                align="left"
                color="text.secondary"
                fontWeight={400}
              >
                Password confirmation:
              </Typography>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                  marginTop: 2,
                }}
              >
                <TextField fullWidth label="Password confirmation *" type="password" id="password" />
              </Box>
            </Item>




            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >

              <Button sx={{ justifyContent: "center", mt: 2, mb: 4 }} size='large' variant="contained" style={{ textTransform: "none" }}  >
                Change password
              </Button>
            </Box>




          </Grid>

      
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
