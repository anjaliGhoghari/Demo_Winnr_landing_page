import React from 'react'
import HeroImage from '../assets/images/hero-image.png'

function HeroSection() {
    return (
        <>
         <section className='container max-w-1440 m-auto h-full'>
            <div className='h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${HeroImage})` }}>
                    <div className='flex flex-col text-center items-center justify-center h-full'>
                        <h1 className=' text-[80px] max-w-[802px] font-extrabold text-white mt-[480px] mb-4 leading-none'>Make the Right Picks Win Real Rewards</h1>
                        <p className=' text-lightGray text-xl font-light mb-10 max-w-[518px] leading-7'>Your instincts already follow the right tokens, trends, and memes. Now get rewarded for it.</p>
                        <a className='btn-green'><span className=' text-radiant-green font-extrabold text-2xl'>Browse Live Contests</span></a>
                    </div>
                </div>
            </section>
        </>)
}

export default HeroSection