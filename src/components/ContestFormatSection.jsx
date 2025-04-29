import React from 'react'
import RightCard from '../assets/images/RightCard.png'
import leftCard from '../assets/images/leftCard.png'
import addUser from '../assets/images/SVG/user-add-fill.svg'
import dvdFill from '../assets/images/SVG/dvd-fill.svg'
import stopCircle from '../assets/images/SVG/stop-circle-fill.svg'
import ghostSmile from '../assets/images/SVG/ghost-smile-fill.svg'


function ContestFormatSection() {
    return (
        <>
            <section className='container m-auto'>
                <div className=' py-20'>

                    <div className='flex flex-col'>
                        <h2 className='text-white text-[56px] font-bold'>Contest formats</h2>
                        <p className='text-lightGray font-light text-lg'>High Tempo, High Stakes. Always Fresh.</p>
                    </div>
                    <div className='py-20'>
                        <div className='flex gap-8 justify-center'>
                            <div
                                className="w-[608px] h-[800px] p-12 rounded-[32px]"
                                style={{ background: 'linear-gradient(180deg, #5EFB7E 0%, #ADFA3C 100%)' }} >
                                <div className='flex gap-1'>
                                    <h3 className=' text-[40px] font-bold'>
                                        Winnr X Bot</h3>
                                    <img src={ghostSmile} />
                                </div>
                                <p className=' text-2xl font-normal'>Challenge Friends on X/Twitter</p>
                                <img className='w-[517px] mt-16' src={leftCard}></img>
                                <div className='flex gap-3 flex-col mt-2'>
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
                            <div
                                className="w-[608px] h-[800px] p-12 rounded-[32px]"
                                style={{ background: 'linear-gradient(0deg, #00FED0 0%, #01A8ED 100%)' }}>
                                <h3 className=' text-[40px] font-bold'>
                                    Invite & Earn
                                </h3>
                                <p className=' text-2xl font-normal'>Get Paid to Bring Winners</p>
                                <img className='w-[566px]' src={RightCard}></img>
                                <div className='flex gap-3 flex-col mt-16'>
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
                </div>
            </section>
        </>
    )
}

export default ContestFormatSection