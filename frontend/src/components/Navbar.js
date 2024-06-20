import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/Backgound";
import Search from "../components/Search";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../hooks/useMovieHooks";
import MovieContainer from "../components/MovieContainer";
import { setUser } from "../redux/slices/userSlice";

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
        console.log("Component mounted");
        console.log("Fetching user from localStorage");

        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser) {
          const parsedUser = JSON.parse(loggedInUser);
          console.log("User data from localStorage:", parsedUser);
          dispatch(setUser(parsedUser));
        } else {
          console.log("No user data found in localStorage");
        }
        setUserLoaded(true);
      } catch (error) {
        console.error("Error fetching user from localStorage:", error);
        setUserLoaded(true);
      }
    };

    fetchUser();
  }, [dispatch]);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

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
