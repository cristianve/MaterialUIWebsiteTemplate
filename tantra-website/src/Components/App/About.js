import StarIcon from "@mui/icons-material/StarBorder";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Gradient from "rgt";
import CristianImage from "../../assets/images/avatar/CristianVega.JPG";
import Title from "../Title.js";
import WebDesign from "../../assets/images/skills/svgexport-4.svg";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const skills = [
  {
    icon: WebDesign,
    name: "Web design",
  },
  {
    icon: WebDesign,
    name: "Web design",
  },
  {
    icon: WebDesign,
    name: "Web design",
  },
];

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export default function About() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Title
        title={"We're on a mission to make building UIs more"}
        gradient={"accessible"}
        description={
          "Our mission is to empower anyone to build UIs, faster. We're reducing the entry barrier, making design skills accessible."
        }
      />

      <Container disableGutters maxWidth="sm" component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        ></Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" style={{marginBottom:24}} >
        <Paper  elevation={12} >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ p: 0, mt:2 }}>
            <Avatar
              alt="Remy Sharp"
              src={CristianImage}
              sx={{ width: 100, height: 100 }}
            />
          </IconButton>

          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="text.primary"
            fontWeight={700}
            lineHeight={1.167}
            gutterBottom
          >
            <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
              Cristian Vega Sánchez
            </Gradient>{" "}
          </Typography>

          <Typography
            variant="p"
            align="center"
            color="text.secondary"
            fontWeight={400}
            paragraph
          
          >
            I'm a Engineer Developer, passionate about what I do, and always
            learning something new. 🚀🖥️
          </Typography>
        </Box>
        </Paper>
       
      </Container>
    </React.Fragment>
  );
}
