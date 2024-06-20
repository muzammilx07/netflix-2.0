import React from "react";
import AppRouter from './routes/AppRouter'
import './App.css'
import MovieDialog from "./components/MovieDailog";

function App() {
  return (
    <div>
      <AppRouter />
      <MovieDialog/>
    </div>
  );
}

export default App;
