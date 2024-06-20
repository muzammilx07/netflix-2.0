import React from "react";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import VideoBackground from "./VideoBackground";
import { getId, setDailog } from "../redux/slices/movieSlice";

const Background = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const selectedMovieId = useSelector((store) => store.movie.selectedMovieId);
  const dispatch = useDispatch();

  if (!movies || movies.length === 0) return null;

  const selectedMovie =
    movies.find((movie) => movie.id === selectedMovieId) || movies[0];
  const genres =
    selectedMovie.genres && Array.isArray(selectedMovie.genres)
      ? selectedMovie.genres.map((genre) => genre.name).join(", ")
      : "";

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(getId(selectedMovie.id));
    console.log(selectedMovie.id);
    dispatch(setDailog(true));
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden relative">
      {/* Background Image */}
      <VideoBackground movieId={selectedMovie.id} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start px-56 text-white">
        <div className="max-w-4xl px-8">
          <img
            src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
            alt={`${selectedMovie.title} Logo`}
            className="w-40 h-auto"
          />
          <h2 className="text-3xl font-bold my-2">{selectedMovie.title}</h2>
          <p className="text-gray-300 text-lg font-semibold my-1">
            {selectedMovie.release_date.split("-")[0]} | Maturity Rating: U/A
            16+ | {selectedMovie.runtime}m | {genres}
          </p>
          <p className="text-gray-300 text-lg font-semibold my-1">
            {selectedMovie.overview}
          </p>
          <div className="flex space-x-4 my-4">
            <button
              className="px-8 py-2 flex items-center gap-2 rounded bg-white text-black"
              onClick={handleClick}
            >
              <FaPlay />
              Play
            </button>
            <button className="px-8 py-2 flex items-center gap-2 rounded bg-gray-700 text-white">
              <FiInfo className="text-white" />
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
