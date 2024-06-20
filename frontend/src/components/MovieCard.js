import React from "react";
import { useDispatch } from "react-redux";
import { getId, setDailog } from "../redux/slices/movieSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(getId(movieId));
    dispatch(setDailog(true));
  };

  if (!posterPath) {
    return null;
  }

  return (
    <div className="movie-card p-2 cursor-pointer" onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="Movie Poster"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default MovieCard;
