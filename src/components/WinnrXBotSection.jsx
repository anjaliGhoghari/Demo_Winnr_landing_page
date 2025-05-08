import React from 'react'
import RightCard from '../assets/images/RightCard.png'
import leftCard from '../assets/images/leftCard.png'
import addUser from '../assets/icons/user-add-fill.svg'
import dvdFill from '../assets/icons/dvd-fill.svg'
import ghostSmile from '../assets/icons/ghost-smile-fill.svg'
import earn from '../assets/icons/earn.svg'
import leader from '../assets/icons/leader.svg'
import rewards from '../assets/icons/rewards.svg'
import live from '../assets/icons/live.svg'

function WinnrXBotSection() {
    return (
        <>
            <section className='container max-w-1440 xs:px-[18px]  mx-auto '>
                
            <div className=' py-20 xs:py-12'>
                        <div className='flex gap-8 xs:gap-[18px] xs:flex-col '>
                        <div
                                className=" basis-1/2  rounded-[32px]"
                                style={{ background: `linear-gradient(180deg, #5EFB7E 0%, #ADFA3C 100%)`, }}>
                                <div className=' pt-12 px-12 xs:pt-7 xs:px-7' >
                                    <div className='flex gap-1'>
                                        <h3 className=' text-[40px] xs:text-2xl font-bold'>
                                            Winnr X Bot</h3>
                                        <img className='xs:max-w-[18px]' src={ghostSmile} />
                                    </div>
                                    <p className=' text-2xl xs:text-base xs:mb-1 font-normal'>Challenge Friends on X/Twitter</p>
                                </div>
                                <div className='flex justify-center'>
                                    <img className='w-[90%] ' src={leftCard}></img>
                                </div>
                                <div className='flex gap-3 xs:gap-[8px] flex-col -mt-3 mx-12 xs:mx-7 mb-12 xs:mt-0 xs:mb-4'>
                                    <div className='flex gap-1'>
                                        <img src={live} className='xs:max-w-[16px]' />
                                        <p className=' text-2xl xs:text-base xs:tracking-tightn xs:leading-none font-semibold'>The bot creates a live contest</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={leader} className='xs:max-w-[16px]' />
                                        <p className=' text-2xl xs:text-base xs:tracking-tightn xs:leading-none font-semibold'>Auto leaderboard in the thread</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={rewards} className='xs:max-w-[16px]' />
                                        <p className=' text-2xl xs:text-base  xs:tracking-tightn xs:leading-none font-semibold'>Rewards are distributed after the results</p>
                                    </div>
                                </div>
                            </div>
                       
                            <div
                                className=" basis-1/2   rounded-[32px]"
                                style={{ background: 'linear-gradient(0deg, #00FED0 0%, #01A8ED 100%)' }}>
                                <div className='pt-12 px-12 xs:pt-7 xs:px-7'>
                                <h3 className=' text-[40px]  xs:text-2xl font-bold'>
                                    Invite & Earn
                                </h3>
                                    <p className=' text-2xl xs:text-base font-normal'>Get Paid to Bring Winners</p></div>
                                <div className='flex justify-center'>
                                    <img className='w-[90%] ' src={RightCard}></img>
                                </div>
                                <div className='flex gap-3 xs:gap-[8px] flex-col xs:mx-7 xs:mt-6 mt-10 xs:mb-4 mx-12'>
                                    <div className='flex gap-1'>
                                        <img src={addUser} className='xs:max-w-[16px]' />
                                        <p className=' text-2xl xs:text-base xs:tracking-tightn xs:leading-none font-semibold'>Invite friends to contests</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={earn} className='xs:max-w-[16px]' />
                                        <p className=' text-2xl xs:text-base xs:tracking-tightn xs:leading-none font-semibold'>You earn 10% more credits</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={dvdFill} className='xs:max-w-[16px]' />
                                        <p className=' text-2xl xs:text-base xs:tracking-tightn xs:leading-none font-semibold'>They get a 5% boost too</p>
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

   