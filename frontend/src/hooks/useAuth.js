import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getTokenFromCookies = () => {
      const token = Cookies.get("token");
      return token;
    };

    const tokenFromCookies = getTokenFromCookies();
    setToken(tokenFromCookies);
  }, []);

  useEffect(() => {
    const verifyToken = (token) => {
      try {
        if (!token) {
          setIsAuthenticated(false);
          setLoggedInUser(null);
          return false;
        }

        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (currentTime < decodedToken.exp) {
          const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

          if (
            userFromLocalStorage &&
            decodedToken.id === userFromLocalStorage._id
          ) {
            setLoggedInUser(userFromLocalStorage);
            setIsAuthenticated(true);
            return true;
          }
        }

        setIsAuthenticated(false);
        setLoggedInUser(null);
        return false;
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsAuthenticated(false);
        setLoggedInUser(null);
        return false;
      }
    };

    if (token) {
      verifyToken(token);
    }
  }, [token]);

  return {
    isAuthenticated,
    loggedInUser,
  };
};

export default useAuth;
