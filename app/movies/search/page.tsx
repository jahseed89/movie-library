import { SearchPageProps } from "@/@types";
import MovieCard from "@/app/components/movie-card/MovieCard";
import { getMovies } from "@/utiles/requests";

async function SearchPage({ params }: SearchPageProps) {
  const searchMovie = params.query;
  const movies = await getMovies(searchMovie);

  return (
    <div className="">
      <h1 className="font-black text-xl my-14">Searched Movie</h1>
      <div className="flex justify-between flex-wrap gap-3">
        {movies.map(
          (movie: {
            titoriginal_titlele: string;
            vote_average: string;
            release_date: string;
            poster_path: string;
            id: string;
          }) => (
            <MovieCard
              key={movie.id}
              title={movie.titoriginal_titlele}
              poster_path={movie.poster_path}
              date={movie.release_date}
              rate={movie.vote_average}
              id={movie.id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default SearchPage;
