import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CardImage from "../../assets/images/contactus.svg";
import Gradient from "rgt";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import GoogleMap from "google-map-react";

import credentials from "./Location/credentials.js";
import Map from "./Location/Map.js";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapKey}`;

const theme = createTheme();

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function Marker({ text }) {
  return (
    <Tooltip title={text} placement="top">
      <Icon className="text-red">place</Icon>
    </Tooltip>
  );
}

function ContactList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#007FFF" }}>
            <Phone />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="+34 605228581" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#007FFF" }}>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="97cvega@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#007FFF" }}>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Address" secondary="08100 - Barcelona" />
      </ListItem>
    </List>
  );
}

export default function ContactUs() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Hero unit */}
      <Container maxWidth="md">
        <Grid container sx={{ mt: 4 }} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item md={6} xs={12} sm={12}>
            <Item component={"span"}>
              <Typography
                component="h2"
                variant="h3"
                align="left"
                color="text.primary"
                fontWeight={700}
                lineHeight={1.167}
                gutterBottom
              >
                <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
                  Contact us
                </Gradient>
              </Typography>
            </Item>

            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography
                variant="h6"
                align="left"
                color="text.secondary"
                fontWeight={400}
              >
                theFront will make your product look modern and professional
                while saving you precious time.
              </Typography>
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

                  transition:
                    "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
              />
            </Item>
          </Grid>
        </Grid>
        <Divider variant="middle" />

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          mt={2}
        >
          <Grid item md={6} xs={12} sm={12}>
            <Typography
              component="h3"
              variant="h4"
              color="text.primary"
              fontWeight={700}
              lineHeight={1.167}
              gutterBottom
            >
              <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
                Contact details
              </Gradient>{" "}
            </Typography>

            <Typography
              variant="p"
              color="text.secondary"
              fontWeight={400}
              paragraph
            >
              Rather than worrying about switching offices every couple years,
              you can instead stay in the same location and grow-up from your
              shared coworking space to an office that takes up an entire floor.
            </Typography>
            <ContactList />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <Map
              googleMapURL={mapURL}
              containerElement={<div style={{ height: "400px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              loadingElement={<p> Cargando </p>}
            />
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          fontWeight={700}
          lineHeight={1.167}
          gutterBottom
        >
          <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
            Message us
          </Gradient>
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          fontWeight={400}
        >
          Rather than worrying about switching offices every couple years, you
          can instead stay in the same location and grow-up from your shared
          coworking space to an office that takes up an entire floor.
        </Typography>

        <Grid container justifyContent="center"   alignItems="center" >
          <Grid xs={12} sm={6}>
            <Box
              sx={{
                marginTop: 2,
              }}
            >
              <TextField fullWidth label="First name" id="firstName" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Box
              sx={{
                marginTop: 2,
              }}
            >
              <TextField fullWidth label="Last name" id="lastName" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
          <Box
              sx={{
                marginTop: 2,
              }}
            >
              <TextField fullWidth label="Email" id="email" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
          <Box
              sx={{
                marginTop: 2,
              }}
            >
              <TextField fullWidth label="Message" id="message" multiline rows={4} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12}>
        

            <Button  sx={{justifyContent: "center",mt:2}} size='large' variant="contained" style={{textTransform:"none"}}>Submit</Button>
 
            </Grid>
            <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          fontWeight={400}
        >
          We'll get back to you in 1-2 business days.
        </Typography>

        </Grid>
      </Container>
    </ThemeProvider>
  );
}
