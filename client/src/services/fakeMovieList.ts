import { Movie } from "types";

const movies: Movie[] = [
  {
    _id: "1",
    title: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    genre: {
      _id: "10",
      name: "Drama",
    },
  },
  {
    _id: "2",
    title: "The Dark Knight",
    poster:
      "https://hbomax-images.warnermediacdn.com/images/GXdkpqAvyDaXCPQEAADdn/tile?size=640x360&partner=hbomaxcom&v=c7cf4fa9ee56d0f9b2b7fe03e596a790&language=sv-se&host=art-gallery.api.hbo.com",
    genre: {
      _id: "11",
      name: "Action",
    },
  },
  {
    _id: "3",
    title: "The Godfather",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genre: {
      _id: "13",
      name: "Crime",
    },
  },
];

export function getMovies() {
  return movies;
}
