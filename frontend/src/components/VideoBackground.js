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

  const videoParams = {
    autoplay: 1,
    mute: 1,
    ...(large
      ? {}
      : {
          loop: 1,
          controls: 0,
          modestbranding: 1,
          disablekb: 1,
          iv_load_policy: 3,
        }),
  };

  const paramString = new URLSearchParams(videoParams).toString();
  const videoSrc = `https://www.youtube.com/embed/${trailerMovie.key}?${paramString}`;

  return (
    <div
      className={large ? "w-full h-[50vh]" : "relative w-screen aspect-video"}
    >
      {!large && <div className="absolute top-0 w-full h-16 bg-red z-10"></div>}
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
