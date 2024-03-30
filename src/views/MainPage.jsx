import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listTags, getTags } from "../redux_utils/TagsSlice";
import { TagsTable } from "../componets/TagsTable";
import { Box, GlobalStyles, Grid, Input, OutlinedInput, Typography } from "@mui/material";
import { SearchFilters } from "../componets/SearchFilters";
import { useAlert } from "../utils/ErrAlertProvider";

export const MainPage = () => {
  const dispatch = useDispatch();
  const tags = useSelector(getTags);
  const alert = useAlert();

  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(listTags()).unwrap();
      } catch (error) {
        // alert.openAlert(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box display={"flex"}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#e3f2fd",
            fontFamily: "Roboto, sans-serif",
          },
        }}
      />
      <Box sx={{ flexGrow: 0.5 }} />
      <Box minWidth={800}>
        <Box p={3} bgcolor={"#42a5f5"} color={"#240A34"}>
          <Typography variant="h3">Stackexchange tags browser</Typography>
        </Box>
        <Box p={5} bgcolor={"#90caf9"}>
          <SearchFilters />
        </Box>
        <Box p={5} bgcolor={"#90caf9"}>
          <TagsTable tags={tags} />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 0.5 }} />
    </Box>
  );
};
