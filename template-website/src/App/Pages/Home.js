import React from 'react';
import '../App.css';

import Title from '../../Components/Title.js';
import Partners from '../../Components/Partners.js';
import CardText from '../../Components/CardText.js';
import GridLayout from '../../Components/GridLayout.js';
import Container from "@mui/material/Container";

import Lottie from 'react-lottie';
import BannerBlue from "../../assets/images/lottiefiles/welcome.json";

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';



const mainTitleContent = {
  title: "My front",
  gradient: "React",
  subtitle: "template webpage",
  description: "Here you can find examples of different components, which can be used to create any kind of web page. All this with the help of Material-UI, JavaScript and CSS.",
  primaryButton: "Get started",
  secondaryButton: "About Us"
}



function App() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BannerBlue,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container maxWidth="sm" sx={{mt:2}}>
      <Lottie 
	    options={defaultOptions}
      height={100} width={300}
      />
      </Container>
      <Title title={mainTitleContent.title} gradient={mainTitleContent.gradient} subtitle={mainTitleContent.subtitle} description={mainTitleContent.description} primaryButton={mainTitleContent.primaryButton} secondaryButton={mainTitleContent.secondaryButton} />
      <Partners />
      <CardText />
      <GridLayout />

    </React.Fragment>


  );
}
export default App;