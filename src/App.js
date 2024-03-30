import React from "react";
import { Provider } from "react-redux";
import store from "./redux_utils/store";
import { MainPage } from "./views/MainPage";
import { CircularProgress } from "@mui/material";
import { CircularProgressProvider } from "./utils/CircularProgressProvider";
import { ErrAlertProvider } from "./utils/ErrAlertProvider";

function App() {
  return (
    <Provider store={store}>
      <ErrAlertProvider>
        <CircularProgressProvider>
          <MainPage />
        </CircularProgressProvider>
      </ErrAlertProvider>
    </Provider>
  );
}

export default App;
