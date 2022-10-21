import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CardImage from "../../../assets/images/contactus.svg";
import Gradient from "rgt";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PasswordChange from "./PasswordChange";
import Button from "@mui/material/Button";

import GoogleMap from "google-map-react";

import credentials from "../Location/credentials.js";
import Map from "../Location/Map.js";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapKey}`;

const theme = createTheme();

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));


function ContactList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#007FFF" }}>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Username" secondary="cristianve" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#007FFF" }}>
            <AlternateEmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="97cvega@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#007FFF" }}>
            <DateRangeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Creation account date" secondary="22 octubre de 1997" />
      </ListItem>
    </List>
  );
}

export default function Account() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Hero unit */}
      <Container maxWidth="md">

        <Divider variant="middle" />

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          mt={8}
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
                Account Settings
              </Gradient>{" "}
            </Typography>

            <Typography
              variant="p"
              color="text.secondary"
              fontWeight={400}
              paragraph
            >
              Here you can find all the information about your account like: username, email and creation date. Also you can change your password or delete your current account.
            </Typography>
            <ContactList />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
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

        <PasswordChange />

        <Divider variant="middle" />
        <Typography
          mt={2}
          component="h4"
          variant="h5"
          align="left"
          color="text.primary"
          fontWeight={700}
          lineHeight={1.167}
          gutterBottom
        >
          <Gradient dir="left-to-right" from="#007FFF" to="#0059B2">
            Delete Account
          </Gradient>
        </Typography>

        <Typography
          variant="h6"
          align="left"
          color="text.secondary"
          fontWeight={400}
          mb={2}
        >
          Delete your account and account data. All progress will be dissapear 😭
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <Button sx={{ justifyContent: "center", mt: 2 }} size='large' variant="contained" style={{ textTransform: "none" }} color="error" >
            Delete Account
          </Button>
        </Box>
        <br />
        <br />
        <Divider variant="middle" />


      </Container>
    </ThemeProvider>
  );
}
