/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TvShows from "./pages/TvShows";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tvshows" element={<TvShows category="Arrow" />} />
          <Route path="/MovieDetails/:elementId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
