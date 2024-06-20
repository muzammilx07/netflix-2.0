
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
  },
  reducers: {
    setSearchMovieDetails: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;
