import React from "react";
import { Box, Input, Select, Typography, MenuItem, OutlinedInput, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { listTags } from "../redux_utils/TagsSlice";


export const SearchFilters = () => {
  const [page, setPage] = React.useState(1);
  const [elementOnPage, setElementOnPage] = React.useState(10);
  const [sortBy, setSortBy] = React.useState("popular");
  const [order, setOrder] = React.useState("desc");

  const dispatch = useDispatch();

  const hendleRefresh = () => {
    dispatch(listTags([page, elementOnPage, order, sortBy]));
  };

  return (
    <Box p={3} sx={{backgroundColor: "#fff", borderRadius: 1}}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography mr={1}>Page:</Typography>
        <OutlinedInput
          size="small"
          type="number"
          placeholder="0"
          sx={{ width: 80, mr: 1}}
          value={page}
          onChange={(e) => setPage(e.target.value)}
          inputProps={{ step: "1", min: "1" }}
        />
        <Typography mr={1}>Element on page:</Typography>
        <OutlinedInput
          size="small"
          type="number"
          placeholder="10"
          sx={{ width: 80 }}
          value={elementOnPage}
          onChange={(e) => setElementOnPage(e.target.value)}
          inputProps={{ step: "10", min: "10" }}
        />
      </Box>
      <Box display={"flex"} alignItems={"center"} mt={1}>
        <Typography mr={1}>Sort by:</Typography>
        <Select type="text" size="small" placeholder="Counter" sx={{mr: 1}} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <MenuItem value="popular">Counter</MenuItem>
          <MenuItem value="name">Name</MenuItem>
        </Select>
        <Typography mr={1}>Order:</Typography>
        <Select type="text" size="small" placeholder="Desc" value={order} onChange={(e) => setOrder(e.target.value)}>
          <MenuItem value="desc">Desc</MenuItem>
          <MenuItem value="asc">Asc</MenuItem>
        </Select>
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={hendleRefresh}>
          Refresh
        </Button>
      </Box>
    </Box>
  );
};
