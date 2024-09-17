import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

export default function MovieDetails({ data }) {
  const { id } = useParams(); // Extract movie ID from the URL

  // Find the movie in the data array that matches the ID
  const movie = data.find((movie) => movie._id === id);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  const [shows, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch(`https://cinema-api.henrybergstrom.com/api/v1/shows/movie/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((shows) => {
        setData(shows); // Assuming the actual movie data is in data
        setLoading(false); // End loading state
      })
      .catch((error) => {
        setError(error); // Set error if fetch fails
        setLoading(false); // End loading state
      });
  }, []);

  if (loading) return <p>Loading...</p>; // Show loading indicator
  if (error) return <p>Error: {error.message}</p>; // Show error message

  console.log(shows); // Check the structure of the fetched data

  const releaseYear = new Date(movie.releaseDate).getFullYear();

  return (
    <>
      <div className="movie-details">
        <div
          className="movie-details-hero-section"
          style={{ backgroundImage: `url(${movie.posterUrl})` }}
        >
          <div className="hero-content">
            <div className="container">
              <h2>{movie.title}</h2>
              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="movie-details-content">
            <div className="left-col">
              <h2>About</h2>
              {/* <img src={movie.posterUrl} /> */}
              {/* <h4>Description</h4> */}
              <p>{movie.description}</p>
              <div className="movie-meta">
                
                <p>
                  <span>Director:</span> {movie.director}
                </p>
                <p>
                  <span>Genre:</span> {movie.genre}
                </p>
                <p>
                  <span>Year of release:</span> {releaseYear}
                </p>
                <p>
                  <span>Duration:</span> {movie.duration} min
                </p>
              </div>
            </div>
            <div className="right-col">
              <h2>Shows</h2>
              {shows.map((show) => (
                <div key={show._id} className="show-details">
                  <div className="show-date">
                    {/* Date */}
                    {new Date(show.startTime).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                  <div className="show-time">
                    {/* Time */}
                    {new Date(show.startTime).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="show-room">Saloon {show.roomNumber}</div>
                  <div className="show-seats">
                  {show.availableSeats.length > 0 ? (
                    <span>
                      {show.availableSeats.length} / {show.availableSeats.length + show.bookedSeats.length}
                    </span>
                    ) : (
                      <span>No available seats</span>
                    )}
                  </div>
                  <div className="show-booking">
                    <button className="btn btn-secondary">Boka biljett</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
