import { useParams } from 'react-router-dom';

export default function MovieDetails({ data }) {
  const { id } = useParams(); // Extract movie ID from the URL

  // Find the movie in the data array that matches the ID
  const movie = data.find(movie => movie._id === id);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <>
      <div className="movie-details">
        <div className="movie-details-hero-section" style={{backgroundImage: `url(${movie.posterUrl})`}}>
          <h2>{movie.title}</h2>
        </div>
      <p>{movie.description}</p>
      {/* Add more details as necessary */}
      </div>
    </>
  );
}