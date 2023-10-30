import React from 'react'
import SideNav from './SideNav'
import { Input } from '../../Components/UserInputs'

function Password() {
  return (
    <div>
        <SideNav>
            <div className='flex flex-col gap-6'>
                <h2 className=' text-xl font-bold'>Change Password</h2>
      <Input label="Previous Password" placeholder="*****" type="password" bg={true}/>
      <Input label="New Password" placeholder="*****" type="password" bg={true}/>
      <Input label="Confirm Password" placeholder="*****" type="password" bg={true}/>
      <div className='flex justify-end items-end my-4'>
        <button className='bg-sky transitions border hover:border-sky hover:bg-blacky text-white py-3 px-6 rounded w-full sm:w-auto'>
          Change Password
        </button>
      </div>

            </div>
        </SideNav>
    </div>
  )
}

export default Password