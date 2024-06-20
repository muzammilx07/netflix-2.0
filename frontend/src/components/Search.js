import React, { useState } from "react";
import axios from "axios";
import { SEARCH_MOVIE_URL, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/slices/searchSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${searchQuery}&include_adult=false&language=en-US&page=1`,
        options
      );
      const movies = res?.data?.results;
      console.log(movies);
      dispatch(setSearchMovieDetails(movies));
    } catch (error) {
      console.error(error);
    }
    setSearchQuery("");
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form onSubmit={submitHandler} className="w-[50%]">
          <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none rounded-md text-lg px-4"
              type="text"
              placeholder="Search Movies..."
            />
            <button className="bg-red-800 text-white rounded-md px-4 py-2 mx-3 ">
              Search
            </button>
          </div>
        </form>
      </div>
      {searchResults.length > 0 ? (
        <MovieList title="Search Results" movies={searchResults} />
      ) : (
        <h1 className="text-center mt-10 text-white">Movie Not Found!!</h1>
      )}
    </div>
  );
};

export default SearchMovie;
