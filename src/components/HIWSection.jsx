import React from 'react'

import HIWCard1 from '../assets/images/HIWCard1.png'
import HIWCard2 from '../assets/images/HIWCard2.png'
import HIWCard3 from '../assets/images/HIWCard3.png'
import HIWCard4 from '../assets/images/HIWCard4.png'


function HIWSection() {
    return (
        <>
            <section className='container m-auto'>
                <div className=' py-20'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <h2 className='text-white text-[56px] font-bold'>How it works</h2>
                            <p className='text-lightGray font-light text-lg'>Play on Conviction, Not Charts.</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <div className='flex py-20 gap-8 overflow-x-auto scroll-smooth'>
                            <img className='max-w-[422px] max-h-[478px]' src={HIWCard1} />
                            <img className='max-w-[422px] max-h-[478px]' src={HIWCard2} />
                            <img className='max-w-[422px] max-h-[478px]' src={HIWCard3} />
                            <img className='max-w-[422px] max-h-[478px]' src={HIWCard4} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HIWSection