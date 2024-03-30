import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { getLoading } from "../redux_utils/TagsSlice";

export const CircularProgressProvider = ({ children }) => {
  const tagsLoading = useSelector(getLoading);

  return (
    <>
      <Backdrop
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#181720",
          opacity: 1,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={tagsLoading ? true : false}
      >
        <CircularProgress color="primary" />
      </Backdrop>
      {children}
    </>
  );
};
