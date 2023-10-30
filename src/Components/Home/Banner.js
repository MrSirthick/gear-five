import React from 'react'
import {Autoplay} from 'swiper/modules'
import {Swiper,SwiperSlide} from 'swiper/react'
import Movies from '../../Data/MoviesData'
import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'
// import Movies from '../../Data/MoviesData'

function Banner() {
  return (
    <div className='relative w-full'>
      <Swiper
      direction="horizontal"
      slidesPerView={1}
      loop={true}
      speed={1000}
      modules={[Autoplay]}
      // modules={[Autoplay]}
      autoplay={true}
      className='w-full xl:h-96 bg-white lg:h-64 h-48'>
        {Movies.slice(0,4).map((movie,index)=>(
          <SwiperSlide key={index} className='relative overflow-hidden'>
            <img
            src={`DataImages/${movie.image}`}
            alt={`${movie.name}`}
            className='w-full h-full object-cover'
            />
            <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
              <h1 className='xl:text-4xl truncate capitalize sm:text-2xl text-xl font-bold'>
              {movie.name}
              </h1>
              <div className="flex gap-5 items-center">
                <Link to={`/movie/${movie.name}`} className='bg-sky hover:text-blacky transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs'>
                Watch
                </Link>
                <button className='bg-white hover:text-submain transitions text-white px-8 py-3.5 rounded text-md bg-opacity-30'>
                <FaHeart/>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner