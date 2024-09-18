import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "./../Modal/Modal"; // Import Modal

import "./MovieDetails.css";

export default function MovieDetails({ data }) {
  const { id } = useParams(); // Extract movie ID from the URL

  // Find the movie in the data array that matches the ID
  const movie = data.find((movie) => movie._id === id);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false); // State for showing modal
  const [selectedShow, setSelectedShow] = useState(null); // State for selected show data (seats)

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
        setShows(shows); // Assuming the actual movie data is in data
        setLoading(false); // End loading state
      })
      .catch((error) => {
        setError(error); // Set error if fetch fails
        setLoading(false); // End loading state
      });
  }, [id]);

  if (loading) return <p>Loading...</p>; // Show loading indicator
  if (error) return <p>Error: {error.message}</p>; // Show error message

  // Trigger modal with seat information
  const handleShowSeats = (show) => {
    setSelectedShow(show); // Store the selected show data (including seats)
    setModalShow(true); // Show the modal
  };

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
                    {new Date(show.startTime).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    })}
                  </div>
                  <div className="show-time">
                    {new Date(show.startTime).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="show-room">Saloon {show.roomNumber}</div>
                  <div className="show-seats">
                    {show.availableSeats.length > 0 ? (
                      <span>
                        {show.availableSeats.length} /{" "}
                        {show.availableSeats.length + show.bookedSeats.length}
                      </span>
                    ) : (
                      <span>No available seats</span>
                    )}
                  </div>
                  <div className="show-booking">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleShowSeats(show)}
                    >
                      Boka biljetter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for showing available and booked seats */}
      {selectedShow && (
        <Modal
          show={modalShow}
          onClose={() => setModalShow(false)}
          availableSeats={selectedShow.availableSeats}
          bookedSeats={selectedShow.bookedSeats}
        />
      )}
    </>
  );
}