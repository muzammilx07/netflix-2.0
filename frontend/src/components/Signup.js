import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate, Link} from "react-router-dom"; // Import useNavigate hook

const Signup = () => {
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const origin = "https://netflix-2-0-b4ss.onrender.com";

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!name || !username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const formData = {
      name: name,
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${origin}/signin`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      
      setError("");
      alert(response.data.message); 

      navigate("/"); 

    } catch (error) {
      console.error("Error signing up:", error);
      if (error.response) {
        console.error("Server response data:", error.response.data);
        console.error("Server response status:", error.response.status);
        setError(`Sign up failed: ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        setError("Sign up request failed. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
        setError("Sign up request failed. Please try again later.");
      }
      // Clear token if needed
      // setToken("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
      <form
        onSubmit={handleSignUp}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up Now</h1>

        {/* Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>

        {/* Username Input */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            ref={usernameRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
          />
        </div>

        {/* Email or Phone Number Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email or Phone Number
          </label>
          <input
            type="text"
            id="email"
            name="email"
            ref={emailRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email or phone number"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {/* Sign Up Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2"
          >
            Sign Up
          </button>
          <Link to="/login">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
