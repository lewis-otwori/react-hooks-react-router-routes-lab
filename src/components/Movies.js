import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div>
    {/*{code here}*/}
    <h1>Movies Page</h1>
    {movies.map((movie) => {
      return (
        <div key={movie.title}>
          <h3>Name: {movie.title}</h3>
          <span>Time: {movie.time}</span>
          <p>Genres: </p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      )
    })}
  </div>);
}

export default Movies;
