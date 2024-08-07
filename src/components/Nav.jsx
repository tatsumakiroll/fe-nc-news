import React from "react";
import { UserLoginContext } from "../context/UserLoginContext";
import Users from "./Users";
import Topics from "./Topics"
import { Stack, Button, Typography, AppBar, Toolbar, IconButton } from "@mui/material";

const Nav = () => {
  const { currentUser } = React.useContext(UserLoginContext);

  return (
    <AppBar sx={{position: 'relative', bgcolor: '#2b317a', }}>
    <Stack direction='row'>
      <Button href="/">
        Home
      </Button>
      </Stack>
      </AppBar>
  );
};

export default Nav;
