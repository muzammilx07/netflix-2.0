import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import movieSliceReducer from "./slices/movieSlice"; 
import searchSliceReducer from "./slices/searchSlice";
import modalReducer from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    movie: movieSliceReducer,
    search:searchSliceReducer,
    modal: modalReducer,

  },
});

export default store;