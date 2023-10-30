import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Movies from '../Data/MoviesData';
import Layout from '../Layout/Layout';
import {BiArrowBack} from "react-icons/bi"
import {FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa';

function WatchPage() {
    const {id}=useParams();
    const movie=Movies.find((movie)=>movie.name===id);
    const[play,setPlay]=useState(false);
  return (
    <Layout>
        <div className='container mx-auto p-6 mb-12'>
            <div className='flex-btn flex-wrap mb-6 gap-2 rounded border border-gray-800 p-6'>
                <Link to={`/movie/${movie?.name}`} 
                className='md:text-xl text-sm flex gap-3 items-center font-bold text-sky'>
                  <BiArrowBack/> {movie.name}
                </Link>
                <div className='flex-btn sm:w-auto w-full gap-5 my-2'>
                    <button className='bg-white hover:text-submain transition bg-opacity-30 text-white rounded px-4 py-3 text-sm'>
                      <FaHeart/>
                    </button>
                    <button className=' bg-white flex-rows gap-2 hover:text-sky transition bg-opacity-30 text-white rounded px-8 py-3 font-medium text-sm'>
                      <FaCloudDownloadAlt/> Download
                    </button>

                </div>
            </div>
            {/*Streaming */}
            {
              play ?(
                <video controls autoPlay={play}
                className='w-full h-full rounded'>
                  <source src='/aboutusvideo.mp4' type='video/mp4' title={movie?.name}/>
                </video>
              ):(
                <div className='w-full h-screen rounded-lg overflow-hidden relative'>
                <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo'>
                <button onClick={()=>setPlay(true)} 
                className='bg-white text-submain flex-colo border border-submain rounded-full w-20 h-20 font-medium text-xl'>
                  <FaPlay/>
                </button>
                </div>
                <img src={
                  movie?.image
                  ? `/DataImages/${movie.image}`
                  : `/DataImages/${movie.writerimg}`
                }
                alt={movie?.name}
                className='w-full h-full object-cover rounded-lg'/>
                </div>
              )
            }
        </div>
    </Layout>
  )
}

export default WatchPage