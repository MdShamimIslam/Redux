import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideos = createAsyncThunk("relatedVideos/fetchRelatedVideos", async ({id,tags}) => {
  const relatedVideos = await getRelatedVideos({id,tags});
  return relatedVideos;
});

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = fetchRelatedVideos;
    builder
      .addCase(pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
