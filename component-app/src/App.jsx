import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Footer from "./Components/Footer/Footer";

// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import TheWorldofCinema from "./Pages/TheWorldofCinema";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("https://cinema-api.henrybergstrom.com/api/v1/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Assuming the actual movie data is in data
        setLoading(false); // End loading state
      })
      .catch((error) => {
        setError(error); // Set error if fetch fails
        setLoading(false); // End loading state
      });
  }, []);

  if (loading) return <p>Loading...</p>; // Show loading indicator
  if (error) return <p>Error: {error.message}</p>; // Show error message

  console.log(data); // Check the structure of the fetched data

  return (
    <>
      <Router>
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home data={data} />} /> {/* Pass data to Home */}
            <Route path="/about" element={<About />} />
            <Route path="/the-world-of-cinema" element={<TheWorldofCinema />} />
            <Route path="/movies/:id" element={<MovieDetails data={data} />} /> {/* Pass data to MovieDetails */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
