import React from 'react'
import FooterI from '../../assets/images/footer.png'
import logo from '../../assets/images/logo.png';
import footer1 from '../../assets/images/footer-1.png';
import footer2 from '../../assets/images/footer-2.png';


function Footer() {
    return (
        <>
        <footer className='container max-w-1440 xs:px-[18px] mx-auto relative '>
            
                <div >
                    <div className='flex justify-between xs:mb-[150px] mb-[300px]'>
                        <div>
                            <a> <img className=' w-100 max-w-[118px] xs:max-w-[56px] cursor-pointer mb-7 xs:mb-2' src={logo} /></a>
                            <p className='text-lightGray max-w-[438px] xs:max-w-[144px] xs:leading-3  xs:text-[8px] text-lg font-light'>We run fast-paced contests around tokens, trends, ecosystems, and even real-world events where users draft picks and win USDC based on live performance.</p>
                        </div>
                        <div className='flex text-right gap-20 xs:gap-4'>
                            <div>
                                <h3 className='text-white font-semibold text-2xl xs:text-xs mb-4 xs:mb-2'>
                                    Legal
                                </h3>
                                <ul className='text-lightGray xs:text-[10px] flex xs:gap-1 flex-col  gap-3 font-light'>
                                    <a><li>Terms & Conditions</li></a>
                                    <a><li>Privacy Policy</li></a>
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-white font-semibold xs:text-xs text-2xl  xs:mb-2 mb-4'>
                                    Quick Links
                                </h3>
                                <ul className='text-lightGray flex flex-col xs:text-[10px] gap-3 xs:gap-1 font-light'>
                                    <a href='https://winnr.gitbook.io/docs'><li>Docs</li></a>
                                    <a href='https://t.me/winnrfun'><li>Telegram</li></a>
                                    <a href='https://x.com/winnrdotfun'><li>Twitter/X</li></a>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='w-full relative flex flex-col items-center text-center justify-center'>
                        <img src={footer1} className=' xs:max-w-[226px] absolute bottom-0' />
                        <img src={footer2} />

                    </div>

                    <div className='xs:p-3'>
                        <p className='text-lightGray xs:text-xs absolute mt-8 bottom-8'>© 2025 Winnr • Built on Solana</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer