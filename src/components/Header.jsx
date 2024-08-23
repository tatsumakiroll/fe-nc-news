import React from "react";
import Nav from "./Nav";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "100vw",
          paddingBottom:"0.5rem"
        }}
      >
        <Typography
          sx={{
            display: "flex",
            color: "#2b317a",
            fontFamily: "OldLondon",
            fontWeight: 800,
            fontSize: "4.5rem",
            textAlign: "left",
            flexDirection: "row",
          }}
        >
          NC
        </Typography>
        <Typography
          sx={{
            fontFamily: "OldLondon",
            fontSize: "4.5rem",
            marginLeft: "0.5rem",
          }}
        >
          news
        </Typography>
      </Box>
      <Nav />
    </>
  );
};

export default Header;
