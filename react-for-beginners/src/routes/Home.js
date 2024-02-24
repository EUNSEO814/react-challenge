import { useEffect, useState } from "react";
import Movie from "../components/Movie";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const response = await fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // );
    // const json = await response.json();
    // ===
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              genres={movie.genres}
              summary={movie.summary}
              title={movie.title}
              coverImg={movie.medium_cover_image}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
