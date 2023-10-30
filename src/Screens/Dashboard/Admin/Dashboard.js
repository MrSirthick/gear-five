import React from 'react'
import { FaRegListAlt,FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import SideNav from '../SideNav'
import Table from '../../../Components/Table'
import Movies from '../../../Data/MoviesData'

function Dashboard() {
    const DashboardData=[
        {
            bg:"bg-red-600",
            icon:FaRegListAlt,
            title:"Total Animes",
            total:4
        },
        {
            bg:"bg-yellow-700",
            icon:HiViewGridAdd,
            title:"Total Catergories",
            total:5
        },
        {
            bg:"bg-green-600",
            icon:FaUser,
            title:"Total Users",
            total:134
        },

    ]
  return (
    <SideNav>
        <h2 className='text-xl font-bold'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {DashboardData.map((data,index)=>(
                <div key={index} className='p-4 rounded border-sky grid grid-cols-4 gap-2'>
                    <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}>
                        <data.icon/>
                    </div>
                    <div className='col-span-3'>
                        <h2>{data.title}</h2>
                        <p className='mt-2 font-bold'>{data.total}</p>
                    </div>
                </div>
            ))}
        </div>
        <h3 className='text-md font-medium mt-6'>Recent Animes</h3>
        <Table data={Movies.slice(0,5)} admin={true}/>
    </SideNav>
  )
}

export default Dashboard