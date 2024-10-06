import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await getVideos();
  return videos;
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = fetchVideos;
    builder
      .addCase(pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
