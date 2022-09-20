import logo5 from "../../images/avatars/Image.png";
import logo4 from "../../images/cards icons/instagram.png";
import logo6 from "../../images/cards icons/smartphone.png";
import logo7 from "../../images/cards icons/award.png";
import logo8 from "../../images/cards icons/package.png";
import logo9 from "../../images/cards icons/target.png";
import logo10 from "../../images/cards icons/calendar.png";
import logo11 from "../../images/cards icons/sun.png";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "none",
    boxShadow: "none",
  },
  image: {
    borderRadius: "10%",
    padding: "15px",
    width: "30px",
    height: "30px",
    backgroundColor: "#ffeced",
  },

  typography1: {
    color: "#113461",
    marginBottom: "20px",
    marginTop: "20px",
  },
  flex: {
    display: "flex",
  },
  margin: {
    paddingLeft: "15px",
    paddingTop: "8px",
  },
  cardMedia1: {
    objectFit: "contain",
    backgroundColor: "#f5afb0",
  },
  textAlign: {
    textAlign: "center",
    marginTop: "10px",
  },
  cardMedia2: {
    objectFit: "contain",
    backgroundColor: "#ffe1e1",
    height: "170px",
  },
  img: {
    width: "15px",
  },
  display: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  height: {
    [theme.breakpoints.down("lg")]: {
      height: "300px",
    },
  },
}));

const CustomizedSlider = styled(CardMedia)`
  & .MuiCardMedia-img {
    border-radius: 100%;
  }
`;

export default function Main() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.typography1} variant="h6">
        Main insights
      </Typography>
      <Grid container spacing={2} className={classes.container}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            lg: {
              height: "300px",
            },
          }}
        >
          <Card className={classes.card}>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <div className={classes.flex}>
                    <img
                      className={classes.image}
                      style={{ backgroundColor: "#ffeced" }}
                      src={logo6}
                    />
                    <div className={classes.margin}>
                      <Typography> Mobile</Typography>
                      <Typography style={{ color: "#c2c1c7" }}>
                        {" "}
                        Most used device
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.flex}>
                    <img
                      className={classes.image}
                      style={{ backgroundColor: "#ffeced" }}
                      src={logo9}
                    />
                    <div className={classes.margin}>
                      <Typography> Black</Typography>
                      <Typography style={{ color: "#c2c1c7" }}>
                        {" "}
                        Most popular
                      </Typography>
                    </div>
                    <div />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.flex}>
                    <img
                      className={classes.image}
                      style={{ backgroundColor: "#eaf5ed" }}
                      src={logo7}
                    />
                    <div className={classes.margin}>
                      <Typography> Baskets</Typography>
                      <Typography style={{ color: "#c2c1c7" }}>
                        {" "}
                        Most popular subcat ...
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.flex}>
                    <img
                      className={classes.image}
                      style={{ backgroundColor: "#fdf4e5" }}
                      src={logo10}
                    />
                    <div className={classes.margin}>
                      <Typography> Mobile</Typography>
                      <Typography style={{ color: "#c2c1c7" }}>
                        {" "}
                        Most used device
                      </Typography>{" "}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.flex}>
                    <img
                      className={classes.image}
                      style={{ backgroundColor: "#e2e5ec" }}
                      src={logo8}
                    />
                    <div className={classes.margin}>
                      <Typography> Mobile</Typography>
                      <Typography style={{ color: "#c2c1c7" }}>
                        {" "}
                        Most used device
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={classes.flex}>
                    <img
                      className={classes.image}
                      style={{ backgroundColor: "#e5ecf6" }}
                      src={logo11}
                    />
                    <div className={classes.margin}>
                      <Typography> Mobile</Typography>
                      <Typography style={{ color: "#c2c1c7" }}>
                        {" "}
                        Most used device
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Card className={classes.card}>
                <CustomizedSlider
                  className={classes.cardMedia2}
                  component="img"
                  height="170"
                  image={logo4}
                ></CustomizedSlider>
                <CardContent className={classes.textAlign}>
                  <Typography variant="h5">Instagram</Typography>
                  <Typography style={{ color: "#c2c1c7" }}>
                    Most Populaire
                  </Typography>
                  <Typography
                    style={{ color: "#c2c1c7" }}
                    className={classes.display}
                  >
                    Social media
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia2}
                  component="img"
                  height="170"
                  image={logo5}
                ></CardMedia>
                <CardContent className={classes.textAlign}>
                  <Typography variant="h5">Idee2look</Typography>
                  <Typography style={{ color: "#c2c1c7" }}>
                    Most Populaire
                  </Typography>
                  <Typography
                    className={classes.display}
                    style={{ color: "#c2c1c7" }}
                  >
                    Influencer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>{" "}
    </div>
  );
}
