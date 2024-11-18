import { MovieCardProp } from '@/app/@types';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const MovieCard: React.FC<MovieCardProp>  = (movie) => {
  console.log(movie)
  const IMAGE_BASE_URL = 	"https://media.themoviedb.org/t/p/w220_and_h330_face"
  return (
    <div className='text-white-100'>
        <Link href={'/movies/'} className='text-white-100'>
            <div className='text-white-100 '>
              {movie.title}
              <Image src={IMAGE_BASE_URL + movie.poster_path}  width={220} height={330} alt='poster'/>
            </div>
            <p className='bg-white-100 text-gray-400 font-bold text-base flex justify-between px-2'>
              <span>{movie.date}</span>
              <span>{movie.rate}</span>

            </p>
        </Link>

    </div>
  )
}

export default MovieCard