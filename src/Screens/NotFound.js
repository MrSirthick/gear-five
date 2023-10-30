import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex-colo w-full min-h-screen text-white bg-blacky lg:py-20 py-10 px-6'>
      <h1 className='text-9xl'>4O4</h1>
      <h1 className='text-4xl font-bold pb-4'>Page Not Found</h1>
      <p className='font-medium text-border italic leading-6 pb-4'>
        We are sorry but the you were looking for was not found!....
      </p>
      <Link to="/" className='bg-sky text-white flex-rows gap-4 font-medium py-3 px-6 rounded-md'>
      <BiArrowBack/> Back to Home
      </Link>
    </div>
  )
}

export default NotFound