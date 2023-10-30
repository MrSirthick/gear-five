import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import Titles from '../Titles'

function MovieWriter({movie}) {
  return (
    <div className='my-12'>
      <Titles title="Writer" Icon={FaUserFriends}/>
      <div className='mt-10'>
        <div className=' sm:w-1/4 flex-colo p-3 italic text-text rounded px-10'>
        <img src={`/DataImages/${movie.writerimg}`} alt={movie.writername} className='w-60 h-60 object-cover rounded border border-sky'/>
        <p className='text-xl py-5'>{movie.writername}</p>
        </div> 
      </div>
    </div>
  )
}

export default MovieWriter