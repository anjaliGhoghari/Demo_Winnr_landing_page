import React from 'react'
import waitList from '../assets/images/waitList.png'


function WaitListSection() {
    return (
        <>
            <section className='container relative max-w-1440 m-auto '>

                <div className='py-20'>
                    <div className=''>
                        <img className=' z-10 right-20 bottom-[10px] absolute' src={waitList} />
                    </div>
                    <div className=" h-[433px] relative rounded-3xl py-10 px-12"
                        style={{ background: `linear-gradient(180deg, #5EFB7E 0%, #ADFA3C 100%)`, }}>
                        <div className=''>
                            <h2 className=' text-[40px] font-bold leading-[44px]'>Get Early Access <br/>
                                to the Game Layer of Crypto</h2>
                            <p className=' max-w-[443px] mt-3 text-2xl font-normal'>Join the waitlist to compete, earn, and shape the future of attention-based rewards.</p>
                        </div>
                        <a className='btn-black absolute bottom-11'>Join Waitlist</a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WaitListSection