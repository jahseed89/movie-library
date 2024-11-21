"use client"

import React, { useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Header = () => {
    const [searchmovie, setSearchMovie] = useState("")
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(searchmovie) {
            router.push(`/movies/search?query=${searchmovie}`)
        }
    }
  return (
    <div className="flex justify-between items-center px-0 lg:px-20 pt-3 lg:pt-8">
        <span>
          <Image src="/movie-logo.png" width={50} height={50} alt="logo" />
        </span>
        <form onSubmit={handleSubmit} className="w-[60%] lg:w-[40%] relative">
          <input
            onChange={e => setSearchMovie(e.target.value)}
            type="text"
            placeholder="Search Movie"
            className="w-full py-1 lg:py-3 px-1 rounded-md placeholder:text-gray-100 outline-0"
          />
          <button className="absolute top-0 right-0 bg-blue-100 text-white-100 text-sm px-2 h-full rounded-tr-md rounded-br-md italic">
            Search
          </button>
        </form>
        <span className="text-white-100 cursor-pointer">MOVIE DB</span>
      </div>
  )
}

export default Header