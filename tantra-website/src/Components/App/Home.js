import React from 'react';
import './App.css';

import Title from '../Title.js';
import Partners from '../Partners.js';
import CardText from '../CardText.js';
import GridLayout from '../GridLayout.js';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';



const mainTitleContent = {
  title: "Welcome to my front",
  gradient: "React",
  subtitle: "template webpage",
  description: "Here you can find examples of different components, which can be used to create any kind of web page. All this with the help of Material-UI, JavaScript and CSS.",
  primaryButton: "Get started",
  secondaryButton: "About Us"
}



function App() {

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Title title={mainTitleContent.title} gradient={mainTitleContent.gradient} subtitle={mainTitleContent.subtitle} description={mainTitleContent.description} primaryButton={mainTitleContent.primaryButton} secondaryButton={mainTitleContent.secondaryButton} />
      <Partners />
      <CardText />
      <GridLayout />

    </React.Fragment>


  );
}
export default App;