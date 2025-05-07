import React from 'react'
import HeroImage from '../assets/images/HeroImage.png'
import GridShadow from '../assets/images/GridShadow.png'
import ShadowBlack from '../assets/images/ShadowBlack.png'

function HeroSection() {
    return (
        <>
            <section className="container xs:px-[18px] relative w-full h-screen xs:h-[380px] pb-10 overflow-hidden" id='hero-section'>
                <div className="relative w-full h-full">
                    <img
                        src={HeroImage}
                        alt="HeroImage"
                        className="absolute  w-full z-0"
                    />
                    <div className="absolute top-[200px] lg:top-[200px] md:top-[70px] xs:top-[107px]  w-full h-full z-10">

                        <img
                            src={ShadowBlack}
                            alt="shadow"
                            className="mx-auto w-full h-full absolute top-0 left-0 z-10 object-cover"
                        />


                        <div className="flex flex-col text-center items-center justify-center h-full relative z-20">
                            <h1 className="text-[80px] xs:text-[32px]
                            sm:text-[32px]  xs:max-w-[357px] max-w-[802px] font-extrabold text-white mb-4 leading-none">
                                Make the Right Picks Win Real Reward
                            </h1>
                            <p className="text-lightGray text-xl xs:text-xs font-light mb-10 xs:mb-8 xs:max-w-[256px] max-w-[518px] leading-7">
                                Your instincts already follow the right tokens, trends, and memes. Now get rewarded for it.
                            </p>
                            <a className="btn-green" href="http://app.winnr.fun/">
                                <span className="text-gradiant-green font-extrabold text-2xl xs:text-base sm:text-base">
                                    Browse Live Contests
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default HeroSection