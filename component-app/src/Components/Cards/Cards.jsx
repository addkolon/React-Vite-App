import "./Cards.css";

export default function Cards({ data }) {
  if (!data || data.length === 0) {
    return <p>No movies available at the moment.</p>; // Handle empty data case
  }

  return (
    <>
      <div className="container">
        <h3 className="movie-cards-heading">
          <span>Senaste filmerna</span>
        </h3>
        {/* Contiainer that holds all our movies */}
        <div className="movie-cards">
          {data.map((movie) => (
            <div key={movie._id} className="card no-br">
              <div className="card-image">
                <img src={movie.posterUrl} alt={movie.description} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{movie.title}</h3>
                {/* <p className="card-text">
              {movie.description}
            </p> */}
              </div>
              {/* <div className="card-buttons">
            <button className='btn btn-primary'>Gå till filmen</button>
          </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
