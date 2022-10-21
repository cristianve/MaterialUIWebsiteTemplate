import { Grid, Typography } from "@material-ui/core";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { styled } from "@mui/material/styles";
import * as React from "react";
import RoadmapStepper from "../../Components/RoadmapStepper.js";
import Title from "../../Components/Title.js";

function PricingContent() {
  const Item = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Title
        gradient={"Roadmap"}
        description={
          "Flexible planning technique to support strategic and long-range planning, by matching short-term and long-term goals with specific technology solutions.."
        }
      />

      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <RoadmapStepper />
          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
