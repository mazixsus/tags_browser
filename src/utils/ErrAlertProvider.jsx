import { Alert, Backdrop } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export function useAlert() {
  return useContext(AlertContext);
}

export function ErrAlertProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openAlert = (error) => {   
    const error_data = JSON.parse(error.message);
    console.log(error_data)
    const error_message = "Error code: " + error_data['code'] + "\n Error message: " + error_data['message'] + "\n Error data: " + JSON.stringify(error_data['data']);
    setMessage(error_message);
    setIsOpen(true);
  };

  const closeAlert = () => {
    setIsOpen(false);
  };

  return (
    <AlertContext.Provider value={{ openAlert, closeAlert }}>
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
        open={isOpen ? true : false}
      >
        <Alert severity="error" sx={{ p:5, whiteSpace: 'pre-line' }}>
          {message}
        </Alert>
      </Backdrop>
      {children}
    </AlertContext.Provider>
  );
}