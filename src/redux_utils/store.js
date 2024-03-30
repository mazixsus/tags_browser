import { configureStore } from "@reduxjs/toolkit";
import TagsSlice from "./TagsSlice";


export default configureStore({
  reducer: {
    tags: TagsSlice,
  },
});