// src/hooks/useMovieHooks.js
import { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);

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
        dispatch(getTrailerMovie(trailer || res.data.results[0]));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMovieById();
  }, [dispatch, movieId]);

  return loading;
};

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const res = await axios.get(Now_Playing_Movie, options);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getNowPlaying();
  }, [dispatch]);

  return loading;
};

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPopular = async () => {
      try {
        const res = await axios.get(Popular_Movie, options);
        dispatch(getPopularMovie(res.data.results));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPopular();
  }, [dispatch]);

  return loading;
};

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopRated = async () => {
      try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovie(res.data.results));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getTopRated();
  }, [dispatch]);

  return loading;
};

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUpcoming = async () => {
      try {
        const res = await axios.get(Upcoming_Movie, options);
        dispatch(getUpcomingMovie(res.data.results));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUpcoming();
  }, [dispatch]);

  return loading;
};
