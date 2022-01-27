import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';

import { createTheme, ThemeProvider } from '@mui/material/styles';



import WebDesign from '../assets/images/skills/svgexport-4.svg';
import UIUX from '../assets/images/skills/svgexport-5.svg';
import ProductDesign from '../assets/images/skills/svgexport-6.svg';
import Branding from '../assets/images/skills/svgexport-7.svg';
import Automation from '../assets/images/skills/svgexport-8.svg';
import Optimization from '../assets/images/skills/svgexport-9.svg';
import Divider from '@mui/material/Divider';
import CardSkill from './CardSkill.js';

const theme = createTheme();

const Item = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));



const skills = [
    {
        icon: WebDesign,
        name: "Web design",
        description: "We design and develop beautiful, lightning fast, scalable, and marketing-focused websites tailored to grow your business."
    },
    {
        icon: UIUX,
        name: "UI / UX Design",
        description: "We craft great user centered interfaces for web and mobile apps. We ensure to deliver intuitive and seamless experiences."
    },
    {
        icon: ProductDesign,
        name: "Product Design",
        description: "We help you to carefully improve your digital product to deliver a great user experience, grow its user base and increase retention."
    },
    {
        icon: Branding,
        name: "Branding",
        description: "We transform businesses into brands through high quality brand identity design."
    },
    {
        icon: Optimization,
        name: "Optimization",
        description: "We help you optimize your website or mobile app to increase your conversion rates."
    },
    {
        icon: Automation,
        name: "Automation",
        description: "We help your business gain leverage and efficiency through smart automation."
    }
]
export default function GridLayout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
           
            {/* Hero unit */}
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 6,
                    pb: 2,
                }}
            >
                
                <Container maxWidth="sm" >
                     <Divider variant="middle" />
                    <Typography
                        component="h3"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        fontWeight={700}
                        lineHeight={1.167}
                        gutterBottom
                        sx={{pt:4}}
                    >
                        What we do?
                    </Typography>
                    <Typography variant="p" align="center" color="text.secondary" fontWeight={400} paragraph>
                        We design, develop and launch websites and products for startups, companies and ourselves.
                    </Typography>

                </Container>
            </Box>
            {/*Finish*/}

            <Container maxWidth="md">
                <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
                    {
                        skills.map((skill) => {
                            return (
                                <Grid key={skill.name} item md={4} xs={12} sm={6} >
                                    <Item component={'span'}>
                                        <CardSkill  name={skill.name} description={skill.description} icon={skill.icon} />
                                    </Item>
                                </Grid>)
                        })

                    }
                </Grid>
            </Container>
        </ThemeProvider >
    );
}
