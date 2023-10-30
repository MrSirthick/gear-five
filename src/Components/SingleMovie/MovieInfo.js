import React from 'react'
import { FaShareAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Rating from '../Star';


function MovieInfo({movie}) {
  return (
    /*Whole Image*/
    <div className='w-full xl:h-screen relative text-white'>
        <img src={`/DataImages/${movie.image}`} alt={movie.name} className='w-full hidden xl:inline-block h-full object-cover'/>   
        <div className='xl:bg-main bg:blacky flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0'>
        <div className='container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8'>
        <div className='xl:col-span-1 w-full xl:order-none order-list h-header bg-blacky border border-blue-600 rounded-lg overflow-hidden'>
        <img src={`/DataImages/${movie?.titleImage}`} alt={movie.name}
         className='w-full h-full object-fill'/>
        </div>
        <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
            <div className='col-span-3 flex flex-col gap-10'>
              {/*Title*/}
               <h1 className='xl:text-4xl capitalize text-2xl font-bold'>{movie.name}</h1>
            {/*Description */}
            <p className='text-text text-m leading-7'>{movie?.desc}</p>
            <div className='flex py-7 text-lg gap-2 text-star'>
                    <Rating value={movie.rate}/>
                 </div>
            <div className='grid grid-cols-3  gap-4 p-6 bg-main border border-gray-800 rounded-lg'>
                {/*Share */}
                <div className='col-span-1 flex-colo border-r border-border'>
                    <button className='hover:bg-sky w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20'>
                        <FaShareAlt/>
                    </button>
                </div>
                {/*List the Episode */}
                <div className='col-span-2 px-9 py-2 mx-5 font-medium text-sm'>
                    <Link to={`/watch/${movie?.name}`} className='bg-dry hover:bg-sky transition border-2 border-sky rounded-full flex-row gap-4 w-full px-8 py-3 '>
                       Watch
                    </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default MovieInfo