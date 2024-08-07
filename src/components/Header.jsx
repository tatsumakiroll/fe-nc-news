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
          margin: "1rem",
          maxWidth: "100%",
        }}
      >
        <Typography
          sx={{ textAlign: "left", fontFamily: "serif", fontSize: "0.75rem" }}
        >
          est. 2024
        </Typography>
        <Typography
          sx={{
            color: "#2b317a",
            fontFamily: "serif",
            fontWeight: 800,
            fontSize: "2rem",
            textAlign: "left",
            lineHeight: "0.8",
          }}
        >
          NC news
        </Typography>
        <Typography
          sx={{ textAlign: "left", fontFamily: "serif", fontSize: "0.8rem" }}
        >
          award winning news site
        </Typography>
      </Box>
      <Nav />
    </>
  );
};

export default Header;
