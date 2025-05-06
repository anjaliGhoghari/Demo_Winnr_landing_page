import React, { useState } from 'react'
import upAerrow from '../assets/icons/arrow-down-s-line.svg'
const FAQList = [
    {
        question: 'How do I win contests on Winnr?',
        answer: 'Winners are ranked by ROI based on real-time token performance. Top-ranked users take home the prize pool.'
    },
    {
        question: 'What kinds of contests are available?',
        answer: 'Choose from token battles, portfolio drafts, IRL events like IPL or elections, and upcoming squad or narrative leagues.'
    },

    {
        question: 'What’s the entry fee and how are rewards paid?',
        answer: 'Contests usually cost $5–$50 USDC to enter. Winners receive rewards in USDC, directly to their wallet.'
    },
    {
        question: 'Can I change my picks after entering?',
        answer: 'once the contest starts, your picks are locked to ensure fairness.'
    },
    {
        question: 'What happens if my token gets rugged or delisted?',
        answer: 'We lock its ROI at the last good price or remove it. If you are affected, we’ll issue refunds.'
    },
];

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleOpen = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
            <section className='container max-w-1440 m-auto'>
                <div className=' py-20'>

                    <h2 className='text-white font-bold text-5xl mb-16'>FAQs</h2>
                    <div>
                        {FAQList.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="group text-white text-3xl">
                                    <div
                                       
                                        className=" items-center py-11 text-center border-t border-gray-900 cursor-pointer">
                                        <div className='flex justify-between '  onClick={() => toggleOpen(index)}>
                                            <h3 className=' tracking-[1px] font-semibold text-[32px]'>{item.question}</h3>
                                            <img
                                                className={`transition-all duration-9000 ${openIndex === index ? 'rotate-180' : ''
                                                    }`}
                                                src={upAerrow}
                                                alt='Toggle Answer'
                                            /></div>
                                       
                                        {isOpen && (
                                            <p className="text-start text-2xl font-normal text-gray-500 overflow-hidden animate-fadeIn">
                                                {item.answer}
                                            </p>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}




export default FAQSection;
