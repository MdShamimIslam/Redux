import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "selectTags",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const removeTagIndex = state.tags.indexOf(action.payload);

      if (removeTagIndex !== -1) {
        state.tags.splice(removeTagIndex, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {tagSelected,tagRemoved,searched} = filterSlice.actions;
