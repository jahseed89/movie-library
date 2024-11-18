import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.themoviedb.org'], // Allow images from TMDB
  },
};

export default nextConfig;
