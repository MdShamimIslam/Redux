import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./postAPI";


const initialState = {
    post: {},
    isLoading: false,
    isError: false,
    error: ''
};

export const fetchPost = createAsyncThunk("post/fetchPost", async(id) => {
    const post = await getPost(id);
    return post;
});

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        const {pending,fulfilled,rejected} = fetchPost;
        builder
            .addCase( pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase( fulfilled, (state,action) => {
                state.isLoading = false;
                state.post = action.payload;
            })
            .addCase( rejected, (state,action) => {
                state.isLoading = false;
                state.post = {};
                state.isError = true;
                state.error = action.error?.message;
            })
    }
});

export default postSlice.reducer;