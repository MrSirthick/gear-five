import React from 'react'
import Layout from '../Layout/Layout'
import Head from '../Components/Head'

function AboutUs() {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="About-Us"/>
        <div className='xl:py-20 py-10 px-4'>
      <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
        <div className='pt-6'>
          <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
            Welcome to <span className='text-sky'>Anime Universe</span>
          </h3>
          <div className='my-8 p-4 mb-6 border border-white rounded-lg w-40 hover:text-sky hover:border-sky'>
            <span className='text-3xl block font-extrabold mt-4'>
              10K <span className='text-sm font-bold mb-1 block'>Anime Viewers</span>
            </span>
          </div>
        </div>
        <div className='mt-3 text-sm leading-8 text-text'>
        <p>
        <span className='text-sky font-semibold'> Gear 5 </span> is not just an anime streaming website; it's a portal to a universe of limitless imagination and boundless adventures. Dive into a world where your anime dreams come alive, where every click unlocks a new realm of excitement and emotion.Gear 5 boasts an unparalleled anime library that caters to both seasoned otaku and newcomers alike. With thousands of titles spanning across genres, eras, and styles, you'll find classics, current hits, and hidden gems waiting to be discovered. From epic shonen battles to heartwarming slice-of-life stories, Gear 5 has it all is not just an anime streaming website; it's a portal to a universe of limitless imagination and boundless adventures. Dive into a world where your anime dreams come alive, where every click unlocks a new realm of excitement and emotion.Gear 5 boasts an unparalleled anime library that caters to both seasoned otaku and newcomers alike. With thousands of titles spanning across genres, eras, and styles, you'll find classics, current hits, and hidden gems waiting to be discovered. From epic shonen battles to heartwarming slice-of-life stories, Gear 5 has it all.
      Whether you prefer to watch on your PC, tablet, smartphone, or smart TV, Gear 5 has you covered. Our website and app are optimized for a variety of devices, so you can enjoy anime anywhere, anytime.</p>
        </div>
      </div>
     </div>
     </div>
    </Layout>
  )
}

export default AboutUs