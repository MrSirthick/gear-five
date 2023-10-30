import React from 'react'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import MoblieHeader from './MoblieHeader/MoblieHeader'

function Layout({children}) {
  return (
    <>
    <div className='bg-blacky text-white'>
       
        <NavBar/>
        {children}
        <Footer/>
        <MoblieHeader/>
    </div>
    </>
  )
}

export default Layout