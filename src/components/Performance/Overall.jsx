import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import Card from "@mui/material/Card";
import logo1 from "../../images/cards icons/shopping-bag.png";
import logo2 from "../../images/cards icons/credit-card.png";
import CardContent from "@mui/material/CardContent";
import logo3 from "../../images/cards icons/navigation.png";
import logo4 from "../../images/cards icons/share-2.png";
import logo5 from "../../images/cards icons/smartphone.png";
import Donutchart from "../Chart/Chart";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
  typography: {
    color: "#113461",
    fontSize: "bold",
    marginBottom: "10px",
  },
  card: {
    height: "150px",
    border: "none",
    boxShadow: "none",
  },
  card2: {
    height: "130px",
  },
  card3: {
    height: "295px",
  },
  image: {
    borderRadius: "50%",
    padding: "8px",
    width: "15px",
    height: "15px",
  },
  textAlign: {
    textAlign: "center",
    marginTop: "20px",
  },
  textAlign2: {
    textAlign: "center",
    marginTop: "15px",
  },
  display1: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  display2: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Overall() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.typography} variant="h6">
        overall Performance
      </Typography>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Card
                className={classes.card}
                style={{ border: "none", boxShadow: "none" }}
              >
                <CardContent>
                  <div className={classes.textAlign}>
                    <img
                      src={logo1}
                      style={{ backgroundColor: "#ffeced" }}
                      className={classes.image}
                      alt=""
                    />
                    <Typography style={{ fontWeight: "bold" }}>
                      {" "}
                      1M€{" "}
                    </Typography>
                    <Typography style={{ color: "#c2c1c7" }}>
                      {" "}
                      sales{" "}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                className={classes.card}
                style={{ border: "none", boxShadow: "none" }}
              >
                <CardContent>
                  <div className={classes.textAlign}>
                    <img
                      src={logo2}
                      style={{ backgroundColor: "#e1e6ec" }}
                      className={classes.image}
                      alt=""
                    />
                    <Typography style={{ fontWeight: "bold" }}>
                      {" "}
                      31K{" "}
                    </Typography>
                    <Typography style={{ color: "#c2c1c7" }}>
                      {" "}
                      Transactions{" "}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Card
                className={classes.card2}
                style={{ border: "none", boxShadow: "none" }}
              >
                <CardContent>
                  <div className={classes.textAlign2}>
                    <img
                      src={logo5}
                      alt=""
                      className={classes.image}
                      style={{ backgroundColor: "#fdf4e5" }}
                    />
                    <Typography style={{ fontWeight: "bold" }}>43€ </Typography>
                    <Typography
                      className={classes.display1}
                      style={{ color: "#c2c1c7" }}
                    >
                      {" "}
                      Panier moyen{" "}
                    </Typography>
                    <Typography
                      className={classes.display2}
                      style={{ color: "#c2c1c7" }}
                    >
                      {" "}
                      Panier
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className={classes.card2}
                style={{ border: "none", boxShadow: "none" }}
              >
                <CardContent>
                  <div className={classes.textAlign2}>
                    <img
                      src={logo4}
                      className={classes.image}
                      style={{ backgroundColor: "#eaf5ed" }}
                      alt=""
                    />
                    <Typography style={{ fontWeight: "bold" }}>689 </Typography>
                    <Typography
                      className={classes.display1}
                      style={{ color: "#c2c1c7" }}
                    >
                      {" "}
                      Number Of shares
                    </Typography>
                    <Typography
                      className={classes.display2}
                      style={{ color: "#c2c1c7" }}
                    >
                      {" "}
                      shares
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                className={classes.card2}
                style={{ border: "none", boxShadow: "none" }}
              >
                <CardContent>
                  <div className={classes.textAlign2}>
                    <img
                      src={logo3}
                      className={classes.image}
                      style={{ backgroundColor: "#ffe1e1" }}
                      alt=""
                    />
                    <Typography style={{ fontWeight: "bold" }}>
                      {" "}
                      31K{" "}
                    </Typography>
                    <Typography
                      className={classes.display1}
                      style={{ color: "#c2c1c7" }}
                    >
                      {" "}
                      Number of Clicks{" "}
                    </Typography>
                    <Typography
                      className={classes.display2}
                      style={{ color: "#c2c1c7" }}
                    >
                      {" "}
                      Clicks{" "}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            className={classes.card3}
            style={{ border: "none", boxShadow: "none" }}
          >
            <CardContent>
              <div className={classes.textAlign}>
                <Donutchart />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>{" "}
    </div>
  );
}
