import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedPosts } from "./relatedPostsAPI";


const initialState = {
    relatedPosts: [],
    isLoading: false,
    isError: false,
    error: ""
};

export const fetchRelatedPosts = createAsyncThunk("relatedPosts/fetchRelatedPosts", async ({id,tags}) => {
    const relatedPosts = await getRelatedPosts({id,tags});
    return relatedPosts;
});

const relatedPostsSlice = createSlice({
    name: "relatedPosts",
    initialState,
    extraReducers: (builder) => {
        const {pending,fulfilled,rejected} = fetchRelatedPosts;
        builder
            .addCase(pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fulfilled, (state,action) => {
                state.isLoading = false;
                state.relatedPosts = action.payload;
            })
            .addCase(rejected, (state,action) => {
                state.isLoading = false;
                state.relatedPosts = [];
                state.isError = true;
                state.error = action.error?.message;
            })
    }

});

export default relatedPostsSlice.reducer;