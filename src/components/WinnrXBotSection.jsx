import React from 'react'
import RightCard from '../assets/images/RightCard.png'
import leftCard from '../assets/images/leftCard.png'
import addUser from '../assets/icons/user-add-fill.svg'
import dvdFill from '../assets/icons/dvd-fill.svg'
import stopCircle from '../assets/icons/stop-circle-fill.svg'
import ghostSmile from '../assets/icons/ghost-smile-fill.svg'


function WinnrXBotSection() {
    return (
        <>
            <section className=' container max-w-1440 m-auto'>
                
                    <div className='py-20'>
                        <div className='flex gap-8 '>
                        <div
                                className=" basis-1/2  rounded-[32px]"
                                style={{ background: `linear-gradient(180deg, #5EFB7E 0%, #ADFA3C 100%)`, }}>
                                <div className=' pt-12 px-12' >
                                    <div className='flex gap-1'>
                                        <h3 className=' text-[40px] font-bold'>
                                            Winnr X Bot</h3>
                                        <img src={ghostSmile} />
                                    </div>
                                    <p className=' text-2xl font-normal'>Challenge Friends on X/Twitter</p>
                                </div>
                                <div className='flex justify-center'>
                                    <img className='w-[90%] ' src={leftCard}></img>
                                </div>
                                <div className='flex gap-3 flex-col -mt-3 mx-12 mb-12'>
                                    <div className='flex gap-1'>
                                        <img src={addUser} />
                                        <p className=' text-2xl font-semibold'>The bot creates a live contest</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={dvdFill} />
                                        <p className=' text-2xl font-semibold'>Auto leaderboard in the thread</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={stopCircle} />
                                        <p className=' text-2xl font-semibold'>Rewards are distributed after the results</p>
                                    </div>
                                </div>
                            </div>
                       
                            <div
                                className=" basis-1/2   rounded-[32px]"
                                style={{ background: 'linear-gradient(0deg, #00FED0 0%, #01A8ED 100%)' }}>
                                <div className='pt-12 px-12'><h3 className=' text-[40px] font-bold'>
                                    Invite & Earn
                                </h3>
                                    <p className=' text-2xl font-normal'>Get Paid to Bring Winners</p></div>
                                <div className='flex justify-center'>
                                    <img className='w-[90%] ' src={RightCard}></img>
                                </div>
                                <div className='flex gap-3 flex-col mt-10 mx-12'>
                                    <div className='flex gap-1'>
                                        <img src={addUser} />
                                        <p className=' text-2xl font-semibold'>Invite friends to contests</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={dvdFill} />
                                        <p className=' text-2xl font-semibold'>You earn 10% more credits</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={stopCircle} />
                                        <p className=' text-2xl font-semibold'>They get a 5% boost too</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </section>
        </>
    )
}

export default WinnrXBotSection

   