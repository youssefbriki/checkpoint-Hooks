import React from "react";
import Movie from "./Movie.js";

const MoviesList = ({ movies, inputT, value }) => {
  return (
    <div>
      <div className="movie">
        {movies
          .filter(
            (movie) =>
              movie.title.toUpperCase().includes(inputT.toUpperCase()) &&
              movie.rating >= value
          )
          .map((card, i) => (
            <Movie cardMovie={card} key={i} />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
