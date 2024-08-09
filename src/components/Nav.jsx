import React from "react";
import { UserLoginContext } from "../context/UserLoginContext";
import Users from "./Users";
import {
  Button,
  AppBar,
  ButtonGroup,
  Typography,
  Toolbar,
} from "@mui/material";

const Nav = () => {
  const { currentUser } = React.useContext(UserLoginContext);

  return (
    <AppBar sx={{ position: "static", bgcolor: "#2b317a" }}>
      <Toolbar display="flex" justifyContent="space-evenly" width="100%">
        <ButtonGroup variant="outlined">
          <Button href="/" sx={{ color: "white" }}>
            Home
          </Button>
          <Button sx={{ color: "white", position: "right" }}>Login</Button>
        </ButtonGroup>
        <Typography alignContent="right" sx={{ marginLeft: "1rem" }}>
          {" "}
          Welcome back {currentUser}!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
