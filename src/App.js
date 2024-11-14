import React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AutoGraph, Cake } from "@mui/icons-material";
import {
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  ButtonGroup,
  Button,
} from "@mui/material";
import "./App.scss";

export default function () {
  return (
    <div className="left-nav-container">
      <h1 className="header"><Cake /> All Filters</h1>
      <h2>
        <AutoGraph /> Selected Filters
      </h2>
      <ButtonGroup
        className="button-group"
        aria-label="outlined primary button group"
      >
        <Button variant="contained" color="success">
          Choose
        </Button>
    
      </ButtonGroup>
      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Filter 1</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Filter 1 details"
            />
          </FormGroup>{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Filter 2</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter 2 details</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <b>Filter 3</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter 3 section details</Typography>
        </AccordionDetails>
      </Accordion>

 

 
    </div>
  );
}
