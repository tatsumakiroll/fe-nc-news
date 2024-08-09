import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import React from "react";

const SortOrder = ({ setSort, setOrder }) => {
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  return (
    <Box>
      <FormControl
        sx={{
          order: "1",
          marginLeft: "1rem",
          marginTop: "1rem",
          minWidth: "5rem",
        }}
      >
        <InputLabel>Sort</InputLabel>
        <Select onChange={handleSort} label="Sort">
          <MenuItem value="comment_count">comment count</MenuItem>
          <MenuItem value="created_at">created at</MenuItem>
          <MenuItem value="votes">vote count</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ order: "1", marginLeft: "1rem", marginTop: "1rem", minWidth:'4.5rem' }}>
        <InputLabel sx={{ minWidth: "max-content" }}>Order</InputLabel>
        <Select onChange={handleOrder} label="Order">
          <MenuItem value="desc">desc</MenuItem>
          <MenuItem value="asc">asc</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default SortOrder;
