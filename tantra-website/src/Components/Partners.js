import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import NasaLight from '../assets/images/partners/nasa-light.svg';
import AmazonLight from '../assets/images/partners/amazon-light.svg';
import SpotifyLight from '../assets/images/partners/spotify-light.svg';
import NetflixLight from '../assets/images/partners/netflix-light.svg';

const theme = createTheme();

const Item = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Partners() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container maxWidth="md" >
                <Grid marginTop={2} marginBottom={4} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={3} xs={6}>
                        <Item>    
                            <img alt="nasa logo svg" widht="52" height="42" src={NasaLight} />
                        </Item>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Item>
                            <img alt="amazon logo svg" widht="52" height="42" src={AmazonLight} />
                        </Item>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Item>
                            <img alt="spotify logo svg" widht="52" height="42" src={SpotifyLight} />
                        </Item>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Item>
                            <img alt="netflix logo svg" widht="52" height="42" src={NetflixLight} />
                            </Item>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
