import React from 'react'
import card1 from '../assets/images/CFCard-1.png'
import card2 from '../assets/images/CFCard-2.png'
import card3 from '../assets/images/CFCard-3.png'
import card4 from '../assets/images/CFCard-4.png'
import card5 from '../assets/images/CFCard-5.png'


function ContestFormatsSection() {
    return (
        <>
            <section className=' container max-w-1440 m-auto'>
                <div className=' py-20'>
                    <div className='flex flex-col'>
                        <h2 className='text-white text-[56px] font-bold'>Contest formats</h2>
                        <p className='text-lightGray font-light text-lg'>High Tempo, High Stakes. Always Fresh.</p>
                    </div>
                    <div className='flex relative' ><img src={card1}/>
                    <img className=' left-12 absolute' src={card2}/>
                    <img className=' right-24 absolute' src={card3}/>
                    <img className=' right-12 absolute' src={card4}/>
                    <img className=' right-0 absolute' src={card5}/></div>
                    
                    

                </div>
            </section>
        </>
    )
}

export default ContestFormatsSection