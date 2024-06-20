import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Netflix from "../pages/Netflix";

const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={ <Netflix />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
