import { getMovieDetails } from "@/utiles/requests";
import Image from "next/image";
import React from "react";

interface MovieDetailsType {
  title: string;
  backdrop_path: string;
  id: string
}

interface MovieDetailsPageProps {
  params: { id: string };
}

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  try {
    const movieDetails: MovieDetailsType | null = await getMovieDetails(params.id);

    console.log("Movie ID:", params.id);
    console.log("Movie Details Response:", movieDetails);

    const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w220_and_h330_face";

    if (!movieDetails || !movieDetails.backdrop_path) {
      return (
        <div className="text-center text-white">
          <p>Movie details not found or image unavailable.</p>
        </div>
      );
    }

    return (
      <div className="text-white p-5">
        <Image
          src={`${IMAGE_BASE_URL}${movieDetails.backdrop_path}`}
          width={220}
          height={330}
          alt={`${movieDetails.title} poster`}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4">{movieDetails.title}</h1>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return (
      <div className="text-center text-white">
        <p>Failed to load movie details. Please try again later.</p>
      </div>
    );
  }
};

export default MovieDetailsPage;