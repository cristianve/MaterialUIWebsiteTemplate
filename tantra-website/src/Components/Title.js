import * as React from "react";

import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Gradient from "rgt";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Title(props) {
  function printButtons() {
    if (props.primaryButton !== undefined) {
      return (
        <Stack
          sx={{ pt: 1 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            style={{ textTransform: "none", fontWeight: "700" }}
            variant="contained"
            endIcon={<ArrowForwardOutlinedIcon />}
          >
            {props.primaryButton}
          </Button>
          <Button
            style={{ textTransform: "none", fontWeight: "700" }}
            variant="outlined"
          >
            {props.secondaryButton}
          </Button>
        </Stack>
      );
    }
  }

  console.log(props);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 0,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              fontWeight={700}
              lineHeight={1.167}
              gutterBottom
            >
              {props.title}{" "}
              <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
                {props.gradient}
              </Gradient>{" "}
              {props.subtitle}
            </Typography>

            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              fontWeight={400}
              paragraph
            >
              {props.description}
            </Typography>

            {printButtons()}
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
