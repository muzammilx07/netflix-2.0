import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import movieSliceReducer from "./slices/movieSlice"; 
import searchSliceReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    movie: movieSliceReducer,
    search:searchSliceReducer
  },
});

export default store;