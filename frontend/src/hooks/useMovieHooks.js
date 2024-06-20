// useMovieHooks.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  getTrailerMovie,
  getNowPlayingMovies,
  getPopularMovie,
  getTopRatedMovie,
  getUpcomingMovie,
} from "../redux/slices/movieSlice";
import {
  options,
  Now_Playing_Movie,
  Popular_Movie,
  Top_Rated_Movie,
  Upcoming_Movie,
} from "../utils/constants";

export const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        const trailer = res?.data?.results?.find(
          (item) => item.type === "Trailer"
        );
        console.log("Trailer:", res.data.results);
        dispatch(getTrailerMovie(trailer || res.data.results[0]));
        console.log()
      } catch (error) {
        console.error(error);
      }
    };

    getMovieById();
  }, [dispatch, movieId]);
};

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const res = await axios.get(Now_Playing_Movie, options);
        console.log("Now Playing Movies:", res.data.results); // Add this line
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.error(error);
      }
    };

    getNowPlaying();
  }, [dispatch]);
};

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopular = async () => {
      try {
        const res = await axios.get(Popular_Movie, options);
        console.log("Popular Movies:", res.data.results); // Add this line
        dispatch(getPopularMovie(res.data.results));
      } catch (error) {
        console.error(error);
      }
    };

    getPopular();
  }, [dispatch]);
};

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRated = async () => {
      try {
        const res = await axios.get(Top_Rated_Movie, options);
        console.log("Top Rated Movies:", res.data.results);
        dispatch(getTopRatedMovie(res.data.results));
      } catch (error) {
        console.error(error);
      }
    };

    getTopRated();
  }, [dispatch]);
};

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcoming = async () => {
      try {
        const res = await axios.get(Upcoming_Movie, options);
        console.log("Upcoming Movies:", res.data.results); // Add this line
        dispatch(getUpcomingMovie(res.data.results));
      } catch (error) {
        console.error(error);
      }
    };

    getUpcoming();
  }, [dispatch]);
};
