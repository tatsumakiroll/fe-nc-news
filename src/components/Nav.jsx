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
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const Nav = () => {
  const { currentUser } = React.useContext(UserLoginContext);

  return (
    <AppBar sx={{ position: "static", bgcolor: "#2b317a" }}>
      <Toolbar display="flex" justifyContent="space-evenly" width="100%">
        <ButtonGroup variant="outlined" sx={{display:'flex', flexDirection:'row'}}>
          <Button href="/" sx={{ color: "white" }}>
          <HomeIcon/>
          </Button>
          <Button sx={{ color: "white", position: "right" }}>
        <AccountBoxIcon/></Button>
        </ButtonGroup>
        <WavingHandIcon sx={{marginLeft:'1rem'}}></WavingHandIcon>
        <Typography sx={{ marginLeft: "1rem", alignContent:'right', justifyContent:'right'}}>
          {" "}
        Welcome back {currentUser}!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
