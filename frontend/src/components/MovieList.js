import React from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies, searchMovie = false }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-8 w-full overflow-hidden">
      <h1
        className={`${searchMovie ? "text-black" : "text-white"} text-3xl py-3`}
      >
        {title}
      </h1>
      <Slider {...settings}>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
