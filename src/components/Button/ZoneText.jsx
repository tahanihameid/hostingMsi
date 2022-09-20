import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import { Typography, Box, Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
    marginRight: "20px",
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button1: {
    borderColor: "#ff5f5f",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    color: "#ff5f5f",
    textTransform: "none",
    marginLeft: "30px",
  },
  button2: {
    marginLeft: "10px",
    backgroundColor: "#ff5f5f",
    color: "white",
    textTransform: "none",
  },

  label: {
    marginLeft: "8px",
    color: "#ff5f5f",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "20px",
  },
  typography: {
    color: "#113461",
  },
}));

export default function ZoneText() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12} md={6}>
        <Typography className={classes.typography} variant="h5">
          Summary dashborad: Drop facts
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <label className={classes.label}>Period</label>
        <div className={classes.button}>
          <Button className={classes.button1} variant="outlined">
            Customize a period
          </Button>
          <Button className={classes.button2} variant="contained">
            Select a period
          </Button>
          <Button variant="outlined" className={classes.button1}>
            {" "}
            Tout
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
