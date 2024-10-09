import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts, updateLikes, updateSavedStatus } from "./postsAPI";

const initialState = {
  posts: [],
  savedPosts: [],
  selectedFilter: "all",
  sortOrder: "",
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    const posts = await getPosts();
    return posts;
  }
);

export const likePost = createAsyncThunk("posts/likePost", async (id, { getState }) => {
    // TODO:-->
    const post = getState().posts.posts.find((p) => p.id === id);
    const updatedLikes = post.likes + 1;
    const updatedPost = await updateLikes(id, updatedLikes);
    return updatedPost;
  });
  
  export const updateSavedPost = createAsyncThunk("posts/toggleSavedPost", async (id, { getState }) => {
    const post = getState().posts.posts.find((p) => p.id === id);
    const updatedSaved = !post.isSaved;
    const updatedPost = await updateSavedStatus(id, updatedSaved);
    return updatedPost;
  });

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },

    toggleSavedPost: (state, action) => {
      const postId = action.payload;
      const isAlreadySaved = state.savedPosts?.find(
        (post) => post?.id === postId
      );
      if (isAlreadySaved) {
        state.savedPosts = state.savedPosts?.filter(
          (post) => post?.id !== postId
        );
      } else {
        const postToSave = state.posts?.find((post) => post?.id === postId);
        if (postToSave) {
          state.savedPosts.push(postToSave);
        }
      }
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = fetchAllPosts;
    builder
      .addCase(pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fulfilled, (state, action) => {
        state.isLoading = false;
        let sortedPosts = action.payload;

        if (state.sortOrder === "newest") {
          sortedPosts = sortedPosts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        } else if (state.sortOrder === "most_liked") {
          sortedPosts = sortedPosts.sort((a, b) => b.likes - a.likes);
        }

        state.posts = sortedPosts;
      })
      .addCase(rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error?.message;
      })

       // Handle updating likes
       .addCase(likePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })

      // Handle toggling saved status
      .addCase(updateSavedPost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      });
  },
});

export default postsSlice.reducer;
export const { setFilter, toggleSavedPost, setSortOrder } = postsSlice.actions;
