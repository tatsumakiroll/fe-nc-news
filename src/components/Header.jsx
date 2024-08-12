import React from "react";
import Nav from "./Nav";
import { Box, Divider, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
    <Divider></Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          margin: "0.75rem",
          marginLeft: "0",
          maxWidth: "100vw"
        }}
      >
        <Typography
          sx={{
            display: "flex",
            color: "#ded5f2",
            fontFamily: "serif",
            fontWeight: 800,
            fontSize: "3rem",
            textAlign: "left",
            lineHeight: "0.8",
            flexDirection: "row",
          }}
        >
          NC
          <Typography
            sx={{
              color: "#2b317a",
              fontSize: "inherit",
              fontFamily: "inherit",
              fontWeight: "inherit",
            }}
          >
            news
          </Typography>
        </Typography>
        <Divider></Divider>
      </Box>
      <Nav />
    </>
  );
};

export default Header;
