import React from 'react'
import contestFormatsSectionMP4 from '../assets/video/contestFormatsSectionMP4.mp4'
function ContestFormatsSection() {
    
    return (
        <>
        <section className='container max-w-1440 xs:px-[18px] sm:px-4 mx-auto ' id='/contest-formats'>
            
        <div className=' py-20 xs:py-12'>
                    <div className='flex flex-col'>
                        <h2 className='text-white xs:tracking-[1px] text-[56px] xs:text-2xl font-bold'>Contest formats</h2>
                        <p className='text-lightGray xs:text-xs font-light text-lg'>High Tempo, High Stakes. Always Fresh.</p>
                    </div>
                    <div> <video className=' w-full h-full' autoPlay loop muted >
                    <source src={contestFormatsSectionMP4} type="video/mp4"  />
                    </video>
                    </div>
                    

                </div>
            </section>
        </>
    )
}

export default ContestFormatsSection 