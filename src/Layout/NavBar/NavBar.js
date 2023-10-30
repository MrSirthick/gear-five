import React from 'react'
import { NavLink } from 'react-router-dom'
import{FaSearch,FaHeart } from 'react-icons/fa'
import{CgUser } from 'react-icons/cg'



function NavBar() {
  const hover='hover:text-sky transitions text-white';
  const Hover=({isActive})=>(isActive ? 'text-sky' : hover)
  return (
    <>
    <div className='bg-blacky shadow-md sticky top-0 z-20'>
        <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
          {/* LOGo name */}
            <div className='col-span-1 text-4xl logofont text-sky  cursor-default  lg:block hidden '>
                <span>GEAR-5</span>
                <span className='block text-sm px-11'>தமிழ்</span>
            </div>
            {/* Search  */}
            <div>
              <div className='md:w-se'>
                <form className='w-full text-sm bg-drygray rounded flex-btn gap-4'>
                  <button type='submit' className='bg-sky w-12 flex-colo h-12 rounded text-white'>
                    <FaSearch/>
                  </button>
                  <input type='text' placeholder='Search Anime'
                  className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black'/>
                </form>
              </div>
            </div>
            {/* Menu */}
            {/* <div className='col-span-5 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'> */}
            <div className=' hidden md:hidden lg:hidden xl:flex xl:gap-14 lg:justify-end 2xl:gap-20 col-span-5 font-medium text-sm items-center'>
            <NavLink to="/" className={Hover}>
                Home
              </NavLink>

              <NavLink to="/movies" className={Hover}>
                Animes
              </NavLink>
              <NavLink to="/about-us" className={Hover}>
                About-Us
              </NavLink>
              <NavLink to="/login" className={Hover}>
                <CgUser className='w-8 h-8'/>
              </NavLink>
              <NavLink to="/favorite" className={Hover}>
                <FaHeart className='w-6 h-6 hover:text-submain'/>
              </NavLink>
            </div>
        </div>

    </div>
    </>
  )
}

export default NavBar