import { Box, Collapse, List, ListItem, ListItemButton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import logo from "../../images/logo.png";
import home from "../../images/slide menu icons/home.png";
const useStyles = makeStyles(() => ({
  container: {
    padding: 2,
    margin: "0",
    backgroundColor: "white",
    height: "100%",
  },
}));
const myArray = [
  {
    image: "calendar-1",
  },
  {
    image: "Group-3",
  },
  {
    image: "map",
  },
  {
    image: "Group 195",
  },
  {
    image: "Group-2",
  },
  {
    image: "database",
  },
  {
    image: "archive",
  },
];
function SideBar() {
  const classes = useStyles();

  return (
    <Box className={classes.container} position="fixed">
      <img
        style={{ marginTop: "20px", marginBottom: "20px" }}
        src={logo}
        alt=""
      />
      <list>
        <ListItem
          disablePadding
          sx={{
            backgroundColor: "#032958",
            borderRadius: "10px",
            color: "white",
            height: "50px",
            marginRight: "5px",
          }}
        >
          <ListItemButton>
            <img src={home} style={{ marginLeft: "7px" }} alt="" />
          </ListItemButton>
        </ListItem>
        {myArray.map((item) => {
          return (
            <ListItem disablePadding style={{ marginTop: "20px" }}>
              <ListItemButton>
                <img
                  style={{ marginLeft: "7px" }}
                  src={require("../../images/slide menu icons/" +
                    item.image +
                    ".png")}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </list>
    </Box>
  );
}

export default SideBar;
