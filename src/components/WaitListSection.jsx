import React from 'react'
import waitList from '../assets/images/waitList.png'


function WaitListSection() {
    return (
        <>
            <section className='container max-w-1440 xs:px-[18px]  mx-auto relative' >
                <div className=' py-[103px]  xs:py-12'>

                    <div className="relative rounded-3xl  xs:h-[518px]"
                        style={{ background: `linear-gradient(180deg, #5EFB7E 0%, #ADFA3C 100%)`, }}>
                        <div className=' py-12 px-12 xs:p-7 xs:z-50 xs:relative '>
                            <div className=''>
                                <h2 className=' text-[40px] font-bold leading-[44px] xs:text-2xl xs:leading-[25px] xs:tracking-[0px]
                            '>Get Early Access <br className="xs:hidden " />
                                    <span className="hidden xs:inline
                                "> </span>
                                    to the Game Layer of Crypto
                                </h2>
                                <p className=' max-w-[443px] xs:max-w-[222px] mt-3 text-2xl font-normal mb-[138px] xs:mb-12 xs:text-xs'>Join the waitlist to compete, earn, and shape the future of attention-based rewards.</p>
                            </div>
                            <div className=" bg-[#75CF49] rounded-2xl  flex items-center py-2 pl-2 pr-2 xs:pl-0  max-w-[500px]">
                                <input
                                    type="email"
                                    placeholder="Enter your email to join"
                                    className="bg-transparent outline-none flex-grow px-4 xs:pr-0  py-2 text-[#2C6043] font-medium text-base leading-9 placeholder-[#2C6043] xs:text-xs"
                                />

                                <button className>
                                    <a className='btn-black mb-10 xs:text-xs
                                ' href='https://www.winnr.fun/waitlist'>Join Waitlist</a>
                                </button>
                            </div>

                        </div>
                        <div className='flex items-center justify-center'>
                            {/* <img className=' z-10  bottom-[40px] absolute xs:bottom-[16px] xs:right-0 xs:overflow-hidden ' src={waitList} /> */}
                            <img className='w-[53%] absolute  right-[-25px] top-[-54px] xs:right-auto 
                                xs:top-auto  items-center xs:bottom-[10px] xs:w-[95%] ' src={waitList} />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WaitListSection