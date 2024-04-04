
import { CircularProgressProvider } from "../utils/CircularProgressProvider";

import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const Mockstore = ({ children }) => (
    <Provider
      store={configureStore({
        reducer: {
          tags: createSlice({
            name: "tags",
            initialState: {
              data: [{name: "Python", count: 500}, {name: "JavaScript", count: 500}],
              loading: true,
              error: null,
            },
            reducers: {
              listTags: (state, action) => {
              },
            },
          }).reducer,
        },
      })}
    >
      {children}
    </Provider>
  );


export default {
    title: "CircularProgressProvider",
    component: CircularProgressProvider,
    parameters: {
      layout: "fullscreen",
    },
    tags: ["autodocs"],
  };
  
export const CircularProgressOn = {
    decorators: [(story) => <Mockstore >{story()}</Mockstore>],
    args: {
        children: "Loading...",
    }

}