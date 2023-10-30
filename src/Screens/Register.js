import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UserInputs'
import { Link } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

function Register() {
  return (
   <Layout>
    <div className='container mx-auto px-2 my-24 flex-colo'>
    <div className='w-full 2xl:w-2/5 flex-colo p-8 sm:p-14 md:w-3/5 rounded-lg border border-border'>
    <div className='text-4xl logofont text-sky cursor-default '>
                <span>GEAR-5</span>
                <span className='block text-sm px-11'>தமிழ்</span>
            </div>
      <Input label="FullName" placeholder="Your Name" type="text" bg={true}/>
      <Input label="DOB" placeholder="mm/dd/yyyy" type="date" bg={true}/>
      <Input label="Email" placeholder="gear5@gmail.com" type="email" bg={true}/>
      <Input label="Password" placeholder="*********" type="password" bg={true}/>
      <Link to="/dashboard" className='bg-submain transitions hover:bg:main flex-rows gap-4 text-white p-3 m-10 rounded-lg w-3/4'>
        <FiLogIn/> Sign Up
      </Link>
      <p className='text-center text-border'>
        Already Have An Account ? {""}
        <Link to="/login" className='text-drygray font-semibold ml-2'>
          Sign In
        </Link>
      </p>
    </div> 
    </div>
   </Layout>
  )
}

export default Register