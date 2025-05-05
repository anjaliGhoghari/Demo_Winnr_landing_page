import React from 'react'
import FooterI from '../../assets/images/footer.png'
import logo from '../../assets/images/logo.png';
import footer1 from '../../assets/images/footer-1.png';
import footer2 from '../../assets/images/footer-2.png';


function Footer() {
    return (
        <>
            <footer className=' pt-20 container max-w-1440 relative '>
                <div >
                    <div className='flex justify-between mb-[245px]'>
                        <div>
                            <a> <img className=' w-100 max-w-[118px] cursor-pointer mb-7' src={logo} /></a>
                            <p className='text-lightGray max-w-[438px] text-lg font-light'>We run fast-paced contests around tokens, trends, ecosystems, and even real-world events where users draft picks and win USDC based on live performance.</p>
                        </div>
                        <div className='flex text-right gap-20'>
                            <div>
                                <h3 className='text-white font-semibold text-2xl mb-4'>
                                    Legal
                                </h3>
                                <ul className='text-lightGray flex flex-col gap-3 font-light'>
                                    <a><li>Terms & Conditions</li></a>
                                    <a><li>Privacy Policy</li></a>
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-white font-semibold text-2xl mb-4'>
                                    Quick Links
                                </h3>
                                <ul className='text-lightGray flex flex-col gap-3 font-light'>
                                    <a href='https://winnr.gitbook.io/docs'><li>Docs</li></a>
                                    <a><li>Telegram</li></a>
                                    <a href='https://x.com/winnrdotfun'><li>Twitter/X</li></a>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className=' relative flex flex-col items-center text-center justify-center'>
                        <img src={footer1} className=' absolute bottom-2 w-f' />
                        <img src={footer2} />

                    </div>

                    <div>
                        <p className='text-lightGray absolute mt-8 bottom-8'>© 2025 Winnr • Built on Solana</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer