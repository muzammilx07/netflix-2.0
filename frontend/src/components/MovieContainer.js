import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);

  return (
    <div className="bg-black w-full py-20">
      <div className="-mt-96 relative z-10">
        <MovieList title={"Popular Movies"} movies={movie.popularMovies} />
        <MovieList
          title={"Now Playing Movies"}
          movies={movie.nowPlayingMovies}
        />
        <MovieList title={"Top Tated Movies"} movies={movie.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;