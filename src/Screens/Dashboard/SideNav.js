import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaHeart, FaListAlt, FaUser } from 'react-icons/fa'
import {RiLockPasswordLine, RiMovie2Fill} from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import Layout from '../../Layout/Layout'
import { NavLink } from 'react-router-dom'

function SideNav({children}) {
    const SideLinks=[
        {
            name:"Dashboard",
            link:"/dashboard",
            icon:BsFillGridFill
        },
        {
            name:"Anime List",
            link:"/movieslist",
            icon:FaListAlt
        },
        {
            name:"Add Anime",
            link:"/addmovie",
            icon:RiMovie2Fill,
        },
        {
            name:"Users",
            link:"/users",
            icon:FaUser
        },
        {
            name:"Update Proflie",
            link:"/proflie",
            icon:FiSettings
        },
        {
            name:"Favorites Anime",
            link:"/favorite",
            icon:FaHeart
        },
        {
            name:"Change Password",
            link:"/password",
            icon:RiLockPasswordLine
        },
    ];

const active="bg-sky text-black"
const hover="hover:text-white hover:bg-main"
const inActive="rounded font-medium text-sm transitions flex gap-3 items-center p-4"
const Hover = ({isActive})=>(
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}` 
)
  return (
    <Layout>
        <div className='min-h-screen container mx-auto px-2'>
            <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
                <div className='col-span-2 sticky bg-blacky border-white p-6 rounded-md xl:mb-0 mb-5'>
                    {
                        //SideBar
                        SideLinks.map((link,index)=>(
                            <NavLink to={link.link} key={index} className={Hover}>
                                <link.icon/> <p>{link.name}</p>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='col-span-6 rounded-md border border-gray-800 p-6'>
                    {children}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default SideNav