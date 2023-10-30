import React, { useState } from 'react'
import Titles from '../Titles'
import {BsBookmarkStarFill} from 'react-icons/bs'
import { Select } from '../UserInputs'
import Rating from '../Star'


function MovieRatings({movie}) {
    const ratings=[
        {
            title:"0-Poor",
            value:0,
        },
        {
            title:"1-NotBad",
            value:1,
        },
        {
            title:"2-Average",
            value:2,
        },
        {
            title:"3-Good",
            value:3,
        },
        {
            title:"4-Awesome",
            value:4,
        },
        {
            title:"5-Masterpeice",
            value:5,
        },
    ]

    const [rating,setRating]=useState(0);
  return (
    <div className='my-12'>
        <Titles title='Reviews' Icon={BsBookmarkStarFill}/>
        <div className=' mt-10 xl:grid flex-colo grid-cols-5 gap-12 xs:p-10 py-10 px-2 sm:p-20 rounded'>
            {/*Reviews */}
            <div className='xl:col-span-2 w-full flex flex-col gap-8'>
                <h3 className='text-xl text-text font-semibold'>
                    Review "{movie?.name}"
                </h3>
                <p className='text-sm leading-7 font-medium text-border'>
                    Click a Review for this Anime.This will be Displayed on the website.The visitors may know about the anime - Thank You!
                </p>
                <div className='text-sm w-full'>
                <Select label="Select Rating"
                 options={ratings}
                 onChange={(e)=>setRating(e.target.value)}/>
                 <div className='flex py-12 text-lg gap-2 text-star'>
                    <Rating value={rating}/>
                 </div>
                </div>
                <button className='bg-sky text-white py-3 w-1/2 flex-colo rounded hover:text-blacky mx-28'>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default MovieRatings