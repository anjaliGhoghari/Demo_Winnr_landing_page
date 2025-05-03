import React from 'react'

import HIWCard1 from '../assets/images/HIWCard1.png'
import HIWCard2 from '../assets/images/HIWCard2.png'
import HIWCard3 from '../assets/images/HIWCard3.png'
import HIWCard4 from '../assets/images/HIWCard4.png'
import RightCard from '../assets/images/RightCard.png'



function HIWSection() {
    return (
        <>
            <section className='container max-w-1440 m-auto'>
                <div className=' py-20'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <h2 className='text-white text-[56px] font-bold'>How it works</h2>
                            <p className='text-lightGray font-light text-lg'>Play on Conviction, Not Charts.</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='flex gap-8 mt-20 '>
                        <div className='min-w-[422px]  bg-blue-500 rounded-[32px]' style={{ background: `linear-gradient(180deg, #4B7802 0%, #003A68 100%)`, }}>
                            <div className=' pt-12 px-12'>
                                <h3 className='text-white text-2xl font-semibold mb-2'>Choose a Contest</h3>
                                <p className=' text-[#9FB68D] text-xl font-light mb-5'>Select from tokens, ecosystems, memes, or real-world events.</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='w-full' src={HIWCard1} />
                            </div>
                        </div>
                        <div className='min-w-[422px] bg-blue-500 rounded-[32px]' style={{ background: `linear-gradient(180deg, #006849 0%, #78026C 100%)`, }}>
                            <div className=' pt-12 px-12'>
                                <h3 className='text-white text-2xl font-semibold mb-2'>Draft Your Picks</h3>
                                <p className=' text-[#8EABA9] text-xl font-light  mb-5'>Allocate 100,000 in-game credits based on your conviction.</p>
                            </div>
                            <div className='flex justify-center'>
                                <img className='w-full' src={HIWCard2} />
                            </div>
                        </div>
                        <div className='min-w-[422px]  bg-blue-500 rounded-[32px]' style={{ background: `linear-gradient(180deg, #006849 0%, #000 100%)`, }}>
                            <div className=' pt-12 px-12'>
                                <h3 className='text-white text-2xl font-semibold mb-2'>Track ROI Live</h3>
                                <p className=' text-[#83AA9E] text-xl font-light  mb-5'>We calculate returns based on real-time token performance.</p>
                            </div>
                            <div className='flex justify-center'>
                                <img className='w-full' src={HIWCard3} />
                            </div>
                        </div>
                        <div className='min-w-[422px] bg-blue-500 rounded-[32px]' style={{ background: `linear-gradient(180deg, #10171D 0%, #024D78 100%)`, }}>
                            <div className=' pt-12 px-12'>
                                <h3 className='text-white text-2xl font-semibold mb-2'>Win USDC</h3>
                                <p className=' text-[#7B94A5] text-xl font-light  mb-12'>Top performers take home real rewards..</p>
                            </div>
                            <div className='flex justify-center'>
                                <img className='w-full' src={HIWCard4} />
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default HIWSection