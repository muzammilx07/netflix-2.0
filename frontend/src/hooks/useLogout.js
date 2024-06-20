import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import Cookies from "js-cookie";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    try {
      localStorage.removeItem("user");
      Cookies.remove("token");
      Cookies.remove("JWT");
      dispatch(setUser(null));
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return logout;
};

export default useLogout;
