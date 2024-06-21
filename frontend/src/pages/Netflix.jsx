import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/Backgound";
import Search from "../components/Search";
import MovieContainer from "../components/MovieContainer";
import { setUser } from "../redux/slices/userSlice";
import { ClipLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";
import Footer from '../components/Footer'
import ModalUnstyled from "../components/AccountModel";
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
  const { isAuthenticated, loggedInUser } = useAuth();
  const toggle = useSelector((state) => state.movie.isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const userCheck = async () => {
      if (loggedInUser) {
        dispatch(setUser(loggedInUser));
      }
      setUserLoaded(true);
    };

    userCheck();
  }, [dispatch, loggedInUser]);

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

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="overflow-x-hidden">
      <ModalUnstyled />
      <Navbar isScrolled={scrolled} />
      {toggle ? (
        <Search />
      ) : (
        <>
          <Background />
          <MovieContainer />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Netflix;
