import React from 'react'
import Titles from '../Titles'
import {BsCollectionFill} from 'react-icons/bs'
import Movies from '../../Data/MoviesData'
import Movie from '../../Components/Movie'

function PopularMovies() {
  return (
    <div className='my-16'>
      <Titles title={"Popular Anime"} Icon={BsCollectionFill}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
      {
      Movies.slice(0,4).map((movie,index) => (
        <Movie key={index} movie={movie}/>
      ))}
      </div>
    </div>
)}

export default PopularMovies
