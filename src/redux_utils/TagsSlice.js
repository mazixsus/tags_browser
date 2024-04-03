import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import apiAxios from "../utils/apiAxios";

export const listTags = createAsyncThunk("tags/listTags", async ([page, page_size, order, sort]) => {
  return apiAxios
    .get(`tags?page=${page ? page : 1}&pagesize=${page_size ? page_size : 10}&order=${order ? order : "desc"}&sort=${sort ? sort : "popular"}&site=stackoverflow`)
    .then((response) => response.data);
});

// export const createTag = createAsyncThunk(
//     "tag/createTag",
//     async (data) => {
//         return authAxios.post("tag/", data).then((response) => response.data);
//     }
// );

export const TagsSlice = createSlice({
  name: "tags",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listTags.pending, (state, action) => {
        state.loading = true;
        // console.log("Pending");
      })
      .addCase(listTags.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.items;
        // console.log(state.data);
      })
      .addCase(listTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        // console.log("Rejected");
      });
  },
});

export const getTags = (state) => state.tags.data;
export const getLoading = (state) => state.tags.loading;
export const getError = (state) => state.tags.error;

export default TagsSlice.reducer;
