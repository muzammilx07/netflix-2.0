import React from "react";
import { useSelector } from "react-redux";
import { useMovieById } from "../hooks/useMovieHooks";

const VideoBackground = ({ movieId, large }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);
  useMovieById(movieId);

  if (!trailerMovie || !trailerMovie.key) {
    console.log("No trailer available:", trailerMovie);
    return <div>No trailer available</div>;
  }

  let videoSrc;

  if (large) {
    videoSrc = `https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&controls=0`;
    console.log(videoSrc);
  } else {
    videoSrc = `https://www.youtube.com/embed/${trailerMovie.key}?loop=1&controls=0&modestbranding=1&disablekb=1&iv_load_policy=3&autoplay=1&mute=1&playlist=${trailerMovie.key}`;
  }

  return (
    <div
      className={large ? "w-full h-[50vh]" : "relative w-screen aspect-video"}
    >
      
      <iframe
        className="w-full h-full aspect-w-16 aspect-h-9"
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
