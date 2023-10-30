import React from 'react'
import SideNav from './SideNav'
import Table from '../../Components/Table'
import Movies from '../../Data/MoviesData'

function FavoritesMovies() {
  return (
    <SideNav>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className=' text-xl font-bold'>Favorites Animes</h2>
                <button className='bg-sky transitions border hover:border-sky hover:bg-blacky text-white py-3 px-6 rounded w-full sm:w-auto'>
          Delete All
        </button>
        </div>
        <Table data={Movies} admin={false}/>
        </div>
    </SideNav>
  )
}

export default FavoritesMovies