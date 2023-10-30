import React from 'react'
import { BiUser } from 'react-icons/bi';
import { BsCollectionPlay } from 'react-icons/bs';
import { CgMenuBoxed } from 'react-icons/cg';
import { FiHeart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function MoblieHeader() {
    const active = "bg-blacky"
    const inActive = "transitions text-2xl flex-colo hover:bg-sky hover:text-black text-sky rounded-md px-4 py-3"
    const Hover=({isActive})=>isActive ? `${active} ${inActive}`:inActive;
  return (
    <>
    <div className='flex-btn h-full bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full'>
{/*Drawer */}
    </div> 
    <header className='lg:hidden fixed z-50 bottom-0 w-full px-1'>
        <div className='bg-black rounded-md flex-btn w-full p-1'>
            <NavLink to="/movies" className={Hover}>
                <BsCollectionPlay/>
            </NavLink>
            <NavLink to="/favorite" className={Hover}>
                <FiHeart className='w-6 h-6'/>
            </NavLink>
            <NavLink to="/login" className={Hover}>
                <BiUser/>
            </NavLink>
            <NavLink to="/" className={Hover}>
                <CgMenuBoxed/>
            </NavLink>


            
        </div>
    </header>
    </>
     )
     
   
}

export default MoblieHeader