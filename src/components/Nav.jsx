import React from "react";
import { UserLoginContext } from "../context/UserLoginContext";
import Users from "./Users";
import Topics from "./Topics"
import { Button, AppBar,ButtonGroup } from "@mui/material";

const Nav = () => {
  const { currentUser } = React.useContext(UserLoginContext);

  return (
    <AppBar sx={{position: 'relative', bgcolor: '#2b317a'}}>
      <ButtonGroup variant="outlined" color='primary'>
      <Button href="/">
        Home
      </Button>
      <Button>Topics</Button>
      <Button>Login</Button>
      </ButtonGroup>
      </AppBar>
  );
};

export default Nav;
