import { getTrendingMovies } from "@/utiles/requests";
import MovieCard from "./components/movie-card/MovieCard";
import Header from "./components/header/Header";

export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <div className="bg-dark-200 p-3 lg-p-10">
      <Header />
      <div className="text-white-100 mt-10 w-[90%] mx-auto">
        <h1 className="font-black text-xl my-14">Top Trending Movies</h1>
        <div className="flex flex-wrap justify-between gap-4">
          {movies.map(
            (movie: {
              vote_average: string;
              release_date: string;
              poster_path: string;
              id: string;
              title: string;
            }) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                date={movie.release_date}
                rate={movie.vote_average}
                id={movie.id}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

