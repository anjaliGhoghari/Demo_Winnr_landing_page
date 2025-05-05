import React from 'react'
import HeroImage from '../assets/images/HeroImage.png'
import GridShadow from '../assets/images/GridShadow.png'
import ShadowBlack from '../assets/images/ShadowBlack.png'

function HeroSection() {
    return (
        <>
            <section className="container relative w-full h-screen pb-20 overflow-hidden">
                <div className="relative w-full h-full">
                    <img
                        src={HeroImage}
                        alt="HeroImage"
                        className="absolute  w-full h-auto z-0"
                    />
                    <div className="absolute top-[260px] w-full h-full z-10">

                        <img
                            src={ShadowBlack}
                            alt="shadow"
                            className="mx-auto w-full h-full absolute top-0 left-0 z-10 object-cover"
                        />


                        <div className="flex flex-col text-center items-center justify-center h-full relative z-20">
                            <h1 className="text-[80px] max-w-[802px] font-extrabold text-white mb-4 leading-none">
                                Make the Right Picks Win Real Reward
                            </h1>
                            <p className="text-lightGray text-xl font-light mb-10 max-w-[518px] leading-7">
                                Your instincts already follow the right tokens, trends, and memes. Now get rewarded for it.
                            </p>
                            <a className="btn-green">
                                <span className="text-gradiant-green font-extrabold text-2xl">
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