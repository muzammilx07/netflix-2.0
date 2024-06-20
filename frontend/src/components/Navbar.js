import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pngwing.com.png";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../redux/slices/movieSlice";
import { ImCross } from "react-icons/im";

const Navbar = ({ isScrolled }) => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.movie.isOpen);

  const toggleSearch = (e) => {
    e.stopPropagation();
    dispatch(setOpen());
  };

  console.log("isScrolled:", isScrolled); // Log the prop to check its value

  return (
    <div
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-2 md:px-16 md:py-4 overflow-x-hidden">
        {/* Left side */}
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16" />
          </div>
          <ul className="flex ml-20 space-x-8">
            <li>
              <Link to="/browse" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tv" className="text-white hover:text-gray-300">
                TV Shows
              </Link>
            </li>
            <li>
              <Link to="/movies" className="text-white hover:text-gray-300">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/mylist" className="text-white hover:text-gray-300">
                My List
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="text-white bg-red-600 py-2 px-8 rounded focus:outline-none"
          >
            {toggle ? <ImCross /> : <FaSearch className="text-white" />}
          </button>
          <button className="text-white focus:outline-none">
            <MdAccountCircle className="text-white text-3xl" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
