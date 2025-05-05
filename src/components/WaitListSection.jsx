import React from 'react'
import waitList from '../assets/images/waitList.png'


function WaitListSection() {
    return (
        <>
            <section className='container relative max-w-1440 m-auto '>

                <div className=' py-[103px]'>
                    <div className=''>
                        <img className=' z-10 right-12 bottom-[40px] absolute' src={waitList} />
                    </div>
                    <div className="relative rounded-3xl py-12 px-12"
                        style={{ background: `linear-gradient(180deg, #5EFB7E 0%, #ADFA3C 100%)`, }}>
                        <div className=''>
                            <h2 className=' text-[40px] font-bold leading-[44px]'>Get Early Access <br/>
                                to the Game Layer of Crypto</h2>
                            <p className=' max-w-[443px] mt-3 text-2xl font-normal mb-[138px]'>Join the waitlist to compete, earn, and shape the future of attention-based rewards.</p>
                        </div>
                        <div className=" bg-[#75CF49] rounded-3xl  flex items-center py-2 pl-6 pr-2 max-w-[500px]">
                            <input
                                type="email"
                                placeholder="Enter your email to join"
                                className="bg-transparent outline-none flex-grow px-4 py-2 text-[#2C6043] font-medium text-base leading-9 placeholder-[#2C6043]"
                            />
                            <button className>
                            <a className='btn-black mb-10 '>Join Waitlist</a>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WaitListSection