import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../components/NavBar/NavBar";
import ZoneText from "../../components/Button/ZoneText";
import Box from "@mui/material/Box";
import Overall from "../../components/Performance/Overall";
import Main from "../../components/Insight/Main";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: "105px",
    marginRight: "20px",
  },
}));

function feed() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <NavBar />
      <ZoneText />
      <Overall />
      <Main />
    </Box>
  );
}

export default feed;
