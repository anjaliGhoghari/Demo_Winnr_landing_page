import React from 'react'
import contestFormatsSectionMP4 from '../assets/video/contestFormatsSectionMP4.mp4'
function ContestFormatsSection() {
    
    return (
        <>
            <section className=' container max-w-1440 m-auto' id='/contest-formats'>
                <div className=' py-20'>
                    <div className='flex flex-col'>
                        <h2 className='text-white text-[56px] font-bold'>Contest formats</h2>
                        <p className='text-lightGray font-light text-lg'>High Tempo, High Stakes. Always Fresh.</p>
                    </div>
                    <div> <video className=' h-full' autoPlay loop muted >
                    <source src={contestFormatsSectionMP4} type="video/mp4"  />
                    </video>
                    </div>
                    

                </div>
            </section>
        </>
    )
}

export default ContestFormatsSection 