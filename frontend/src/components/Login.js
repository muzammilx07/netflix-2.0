import React, { useRef, useState } from "react";
import axios from "axios";
import bgImage from "../assets/bg.jpg";
import logoImage from "../assets/pngwing.com.png";
import "./css/custom.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import Cookies from "js-cookie";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const origin = "https://netflix-2-0-b4ss.onrender.com";

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Validation: Check if email or password is empty
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${origin}/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      // Set token in cookies
      Cookies.set("token", response.data.token, { expires: 1 }); 

      // Update user in local storage
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      dispatch(setUser(response.data.user));

      setError("");
      alert(response.data.message);

      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid credentials. Please try again.");
    }
  };


  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image Container with Image and Gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute top-0 left-1/4 z-10">
          {/* Logo */}
          <img src={logoImage} alt="Logo" className="w-48 mx-auto" />
        </div>

        {/* Main Container */}
        <div className="absolute top-1/2 left-1/2 rounded-lg -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 rounded-4 box-border flex flex-col items-stretch w-full max-w-md px-16 py-24">
          {/* Input field example */}
          <form action="#" className="container relative">
            <h1 className="text-3xl text-white">Sign In</h1>
            <div className="form-element">
              <input
                type="text"
                name="email"
                id="email"
                required
                ref={emailRef}
              />
              <label className="floating-label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="form-element">
              <input
                type="password"
                name="password"
                id="password"
                required
                ref={passwordRef}
              />
              <label className="floating-label" htmlFor="password">
                Password
              </label>
            </div>

            <button className="btn" onClick={handleSignIn}>
              Sign In
            </button>
            {error && <p className="text-red-500 m-4">{error}</p>}
            <div className="nav text-white">
              <p className="m-8 underline">Forget Password ?</p>
              <p className="m-8">
                New to Netflix?{" "}
                <Link to="/signup">
                  <span className="font-bold">Sign up now.</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
