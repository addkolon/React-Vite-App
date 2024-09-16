import { useState, useEffect } from "react";

import './App.css'
import Cards from './Components/Cards/Cards'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import Navigation from './Components/Navigation/Navigation'
import Footer from "./Components/Footer/Footer";

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
        setData(data);  // Assuming the actual movie data is in data
        setLoading(false);   // End loading state
      })
      .catch((error) => {
        setError(error);     // Set error if fetch fails
        setLoading(false);   // End loading state
      });
  }, []);

  if (loading) return <p>Loading...</p>;   // Show loading indicator
  if (error) return <p>Error: {error.message}</p>;   // Show error message

  console.log(data);  // Check the structure of the fetched data

  return (
    <>
      <Navigation />
      <div className="main-content">
        <HeroBanner data={data} />
        <Cards data={ data } />
      </div>
      <Footer />
    </>
  )
}

export default App
