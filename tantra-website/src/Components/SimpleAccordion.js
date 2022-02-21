import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion(props) {
    console.log(props)
  return (
    <div style={{marginTop:2}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        
        >
          <Typography style={{fontWeight:"bold"}}>{props.summary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {props.details}
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
