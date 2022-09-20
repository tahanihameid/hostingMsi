import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../../images/avatars/Image-1.png";
import { Grid } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    justifyContent: "flex-end",
    overflow: "auto",
  },
  div2: {
    textAlign: "justify",
  },
  typography: {
    color: "#113461",
    paddingTop: 0,
  },
  image: {
    marginLeft: "10px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#ffafaf",
  },
  typography2: {
    textAlign: "right",
    color: "#cdd6de",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card
          style={{
            border: "none",
            boxShadow: "none",
            height: "70px",
            marginTop: "20px",
          }}
        >
          <CardContent>
            <div className={classes.div}>
              <div className={classes.div2}>
                <Typography
                  style={{ fontWeight: "bold" }}
                  className={classes.typography}
                >
                  John Doe
                </Typography>
                <Typography className={classes.typography2}>Profile</Typography>{" "}
              </div>
              <img className={classes.image} src={Image1} alt="" />
            </div>
          </CardContent>
        </Card>
      </Grid>{" "}
    </Grid>
  );
}

export default NavBar;
