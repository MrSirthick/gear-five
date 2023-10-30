import React from 'react'
import SideNav from '../Screens/Dashboard/SideNav'
import Movies from '../Data/MoviesData'
import Table from './Table'


function MovieList() {
  return (
    <SideNav>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className=' text-xl font-bold'>Anime Lists</h2>
                <button className='bg-sky transitions border hover:border-sky hover:bg-blacky text-white py-3 px-6 rounded w-full sm:w-auto'>
          Delete All
        </button>
        </div>
        <Table data={Movies} admin={true}/>
        </div>
    </SideNav>
  )
}

export default MovieList