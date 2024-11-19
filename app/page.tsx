import Image from "next/image";
import { getTrendingMovies } from "@/utiles/requests";
import MovieCard from "./components/movie-card/MovieCard";

export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <div className="bg-dark-200 p-3 lg-p-10">
      <div className="flex justify-between items-center px-0 lg:px-20 pt-3 lg:pt-8">
        <span>
          <Image src="/movie-logo.png" width={50} height={50} alt="logo" />
        </span>
        <div className="w-[60%] lg:w-[40%] relative">
          <input
            type="text"
            placeholder="Search Movie"
            className="w-full py-1 lg:py-3 px-1 rounded-md placeholder:text-gray-100 outline-0"
          />
          <button className="absolute top-0 right-0 bg-blue-100 text-white-100 text-sm px-2 h-full rounded-tr-md rounded-br-md italic">
            Search
          </button>
        </div>
        <span className="text-white-100 cursor-pointer">MOVIE DB</span>
      </div>

      <div className="text-white-100 mt-10 w-[90%] mx-auto">
        <h1 className="font-black text-xl my-14">Top Trending Movies</h1>
        <div className="flex flex-wrap justify-between gap-4">
          {movies.map(
            (movie: {
              vote_average: number;
              release_date: number;
              poster_path: string;
              id: number;
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
