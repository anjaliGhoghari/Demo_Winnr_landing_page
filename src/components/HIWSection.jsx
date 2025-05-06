
import React, { useRef, useState, Component } from 'react'
import Slider from "react-slick";
import HIWCard1 from '../assets/images/HIWCard1.png'
import HIWCard2 from '../assets/images/HIWCard2.png'
import HIWCard3 from '../assets/images/HIWCard3.png'
import HIWCard4 from '../assets/images/HIWCard4.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function HIWSection() {
    const [activeArrow, setActiveArrow] = useState(null);
    const isActive = activeArrow === 'prev';

    const PrevArrow = ({ onClick }) => (

        <button
            className={`w-8 h-8 rounded-[9px] flex items-center justify-center shadow-md transition-colors duration-100 ${isActive ? 'bg-[#5EFB7E]' : 'bg-darkGreen'
                }`}
            onClick={() => {
                setActiveArrow('prev');
                onClick();
            }}
            aria-label="Previous Slide"
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
            >
                <path
                    d="M15.7707 16.0011L19.5427 19.7718L17.6573 21.6584L12 16.0011L17.6573 10.3438L19.5427 12.2304L15.7707 16.0011Z"
                    fill={isActive ? '#00220d' : '#5EFB7E'}
                />
            </svg>
        </button>
    );

    const NextArrow = ({ onClick }) => {
        const isActive = activeArrow === 'next';
    
        return (
            <button
                className={`w-8 h-8 rounded-[9px] flex items-center justify-center shadow-md transition-colors duration-200 ${isActive ? 'bg-[#5EFB7E]' : 'bg-darkGreen'}`}
                onClick={() => {
                    setActiveArrow('next');
                    onClick();
                }}
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                >
                    <path
                        d="M16.229 16.0011L12.457 12.2304L14.3424 10.3438L19.9997 16.0011L14.3424 21.6584L12.457 19.7718L16.229 16.0011Z"
                        fill={isActive ? '#00220d' : '#5EFB7E'}
                    />
                </svg>
            </button>
        );
    };
    const sliderRef = useRef();
    const settings = {
        className: "slider variable-width",
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
       slidesToScroll: 1,
        speed: 500,
        dots: true,
       
        arrows: false,
        variableWidth: true,

        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <>
            <section className='' id='/how-it-works'>
                <div className='py-20 container mx-auto'>
                    <div className=''>
                        <div className='flex justify-between items-center text-center'>
                            <h2 className='text-white text-[56px] font-bold'>How it works</h2>
                            <div className='flex border border-darkGreen p-2 rounded-[14px] gap-2'>

                                <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
                                <NextArrow onClick={() => sliderRef.current?.slickNext()} />

                            </div>
                        </div>
                        <div><p className='text-lightGray font-light text-lg '>Play on Conviction, Not Charts.</p></div>
                    </div>

        <div className='slider-container'>
                    <Slider ref={sliderRef} {...settings} className="mt-16 ">

                        <div style={{ width: 450 }} className="pr-8">
                            <div className="rounded-[32px] overflow-hidden h-[478px] min-w-[422px] flex flex-col justify-between" style={{ background: 'linear-gradient(180deg, #4B7802 0%, #003A68 100%)' }}>
                                <div className="pt-12 px-12">
                                    <h3 className="text-white text-2xl font-semibold mb-2">Choose a Contest</h3>
                                    <p className="text-[#9FB68D] tracking-wider text-xl font-light mb-5">Select from tokens, ecosystems, memes, or real-world events.</p>
                                </div>
                                <div className="flex item-end">
                                    <img className="w-full" src={HIWCard1} alt="Choose a Contest" />
                                </div>
                            </div>
                        </div>


                        <div style={{ width: 450 }} className="pr-8">
                            <div className="rounded-[32px] overflow-hidden  h-[478px] min-w-[422px] flex flex-col justify-between" style={{ background: 'linear-gradient(180deg, #006849 0%, #78026C 100%)' }}>
                                <div className="pt-12 px-12">
                                    <h3 className="text-white text-2xl font-semibold mb-2">Draft Your Picks</h3>
                                    <p className="text-[#8EABA9] tracking-wider  text-xl font-light mb-5">Allocate 100,000 in-game credits based on your conviction.</p>
                                </div>
                                <div className="flex items-end">
                                    <img className="w-full" src={HIWCard2} alt="Draft Your Picks" />
                                </div>
                            </div>
                        </div>

                        <div style={{ width: 450 }} className="pr-8">
                            <div className="rounded-[32px] overflow-hidden h-[478px] min-w-[422px] flex flex-col justify-between" style={{ background: `linear-gradient(180deg, #10171D 0%, #024D78 100%)` }}>
                                <div className="pt-12 px-12">
                                    <h3 className="text-white text-2xl font-semibold mb-2">Win USDC</h3>
                                    <p className="text-[#8EABA9] tracking-wider  text-xl font-light mb-5">Top performers take home real rewards.</p>
                                </div>
                                <div className="flex items-end">
                                    <img className="w-full" src={HIWCard4} alt="Draft Your Picks" />
                                </div>
                            </div>
                        </div>


                        <div style={{ width: 450 }} className="pr-8" >
                            <div className="rounded-[32px] overflow-hidden h-[478px] min-w-[422px] flex flex-col justify-between" style={{ background: 'linear-gradient(180deg, #006849 0%, #000 100%)' }}>
                                <div className="pt-12 px-12">
                                    <h3 className="text-white text-2xl font-semibold mb-2">Track ROI Live</h3>
                                    <p className="text-[#B0D9EA] tracking-wider  text-xl font-light mb-5">We calculate returns based on real-time token performance.</p>
                                </div>
                                <div className="flex item-end">
                                    <img className="w-full" src={HIWCard3} alt="Track ROI Live" />
                                </div>
                            </div>
                        </div>
                    </Slider>
</div>
                </div>
            </section>
        </>
    )
}

export default HIWSection
