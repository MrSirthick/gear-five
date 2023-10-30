import React from 'react'
import Uploader from '../../../Components/Uploader'
import { Input, Message, Select } from '../../../Components/UserInputs'
import { CategoryData } from '../../../Data/MoviesData'
import { ImUpload } from 'react-icons/im'
import SideNav from '../SideNav'

function AddMovie() {
  return (
    <div>
        <SideNav>
            <div className='flex flex-col gap-6'>
                <h2 className=' text-xl font-bold'>Add Animes</h2>
        <div className='w-full grid md:grid-cols-2 gap-6'>

       
      <Input
      label="Anime Name"
      placeholder="Name" 
      type="text" 
      bg={true}/>
      <Input label="Episodes" placeholder="100" type="text" bg={true}/>
      </div>
      <div className='w-full grid md:grid-cols-2 gap-6'>
        <div className="text-sm w-full my-5">

        <Select label="Anime Category" options={CategoryData}/>
        </div>
        <Input label="Year of Release" placeholder="1990" type="text" bg={true}/>
        </div>
        {/*Images */}
        <div className='w-full grid md:grid-cols-2 gap-6'>
         {/*Images wo title */} 
         <div className='flex flex-col gap-2'>
            <p className='text-border font-semibold text-sm'>Image Without Title</p>
            <Uploader/>
            </div> 
            <div className='flex flex-col gap-2'>
            <p className='text-border font-semibold text-sm'>Image With Title</p>
            <Uploader/>
            </div> 
            <div className='flex flex-col'>
            <Input label="Writer Name" placeholder="Oda" type="text" bg={true}/>
            <Input label="Episode No" placeholder="101" type="text" bg={true}/>
            </div>

            <div className='flex flex-col gap-3'>
            <p className='text-border font-semibold text-sm '>Writer Image</p>
            <Uploader/>
            </div>  
        </div>
        {/*Descrption */}
        <Message label="Anime Description" placeholder="Make it Short"/>
        {/*Anime video */}
        <div className='flex flex-col gap-2 w-full'>
            <label className='text-border font-semibold text-sm'>Anime episodes</label>
            <Uploader video={true}/>
            </div>
        <div className='flex justify-end items-end my-4'>
        <button className='bg-sky w-full flex-rows gap-6 font-medium text-white py-4 rounded'>
         <ImUpload/> Publish
        </button>
      </div>

            </div>
        </SideNav>
    </div>
  )
}

export default AddMovie