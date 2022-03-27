import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMovies } from "services/fakeMovieList";
import { Movie } from "types";

function Movielist() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const movies = getMovies();
    setMovies(movies);
  }, []);
  return (
    <Container>
      {movies.map((movie) => (
        <div>
          <span>{movie.title}</span>

          <Poster src={movie.poster} />
        </div>
      ))}
    </Container>
  );
}

export default Movielist;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const Poster = styled.img`
  width: 300px;
  height: 200px;
`;
