// src/pages/Netflix.jsx
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/Backgound";
import Search from "../components/Search";
import MovieContainer from "../components/MovieContainer";
import { setUser } from "../redux/slices/userSlice";
import { ClipLoader } from "react-spinners";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../hooks/useMovieHooks";

const Netflix = () => {
  const [scrolled, setScrolled] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const toggle = useSelector((state) => state.movie.isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser) {
          const parsedUser = JSON.parse(loggedInUser);
          dispatch(setUser(parsedUser));
        }
        setUserLoaded(true);
      } catch (error) {
        console.error("Error fetching user from localStorage:", error);
        setUserLoaded(true);
      }
    };

    fetchUser();
  }, [dispatch]);

  const nowPlayingLoading = useNowPlayingMovies();
  const popularLoading = usePopularMovies();
  const topRatedLoading = useTopRatedMovies();
  const upcomingLoading = useUpcomingMovies();

  const moviesLoaded =
    !nowPlayingLoading &&
    !popularLoading &&
    !topRatedLoading &&
    !upcomingLoading;

  if (!userLoaded || !moviesLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#E50914"} loading={true} />
      </div>
    );
  }

  if (!user && userLoaded) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar isScrolled={scrolled} />
      {toggle ? (
        <Search />
      ) : (
        <>
          <Background />
          <MovieContainer />
        </>
      )}
    </div>
  );
};

export default Netflix;
