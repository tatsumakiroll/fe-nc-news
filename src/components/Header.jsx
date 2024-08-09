import React from "react";
import Nav from "./Nav";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          margin: "0.75rem",
          marginLeft: "0",
          maxWidth: "100vw",
          paddingTop: "1rem",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            color: "#ded5f2",
            fontFamily: "serif",
            fontWeight: 800,
            fontSize: "2rem",
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
      </Box>
      <Nav />
    </>
  );
};

export default Header;
