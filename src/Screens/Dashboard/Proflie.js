import React from 'react'
import SideNav from './SideNav'
import Uploader from '../../Components/Uploader'
import { Input } from '../../Components/UserInputs'

function Proflie() {
  return (
    <div>
        <SideNav>
            <div className='flex flex-col gap-6'>
                <h2 className=' text-xl font-bold'>Proflie</h2>
                <Uploader/>
      <Input label="FullName" placeholder="Your Name" type="text" bg={true}/>
      <Input label="Email" placeholder="gear5@gmail.com" type="email" bg={true}/>
      <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
        <button className='bg-sky transitions border hover:border-sky hover:bg-blacky text-white py-3 px-6 rounded w-full sm:w-auto'>
          Remove Account
        </button>
        <button className='bg-sky transitions border hover:border-sky hover:bg-blacky text-white py-3 px-6 rounded w-full sm:w-auto'>
          Update Proflie
        </button>
      </div>

            </div>
        </SideNav>
    </div>
  )
}

export default Proflie