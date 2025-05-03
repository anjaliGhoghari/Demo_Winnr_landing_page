import React, { useState } from 'react'
import upAerrow from '../assets/images/SVG/arrow-down-s-line.svg' 
const FAQList = [
    {
        question: 'Is there any How do I win contests on Winnr?',
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
]

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const ToggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? 'null' : index);
    }
    return (
        <>
            <section className='container max-w-1440 m-auto'>
                <div className=' py-20'>
                   
                        <h2 className='text-white font-bold text-5xl mb-16'>FAQs</h2>
                        <div className=''>
                            {FAQList.map((item, index) => (
                                <div className='text-white text-3xl font-bold' key={index} >
                                    <div className='flex border-t border-gray-900 py-12 justify-between ' onClick={() => ToggleFAQ(index)}>
                                    <h3 className=' tracking-wide text-2xl'>{item.question}</h3>
                                        <img
                                            className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                            src={upAerrow}
                                            alt='Toggle Answer'
                                        />
                                    </div>
                                    <div className={` items-center text-start text-2xl font-normal  text-gray-500 overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100 mt-[-48px] ' : 'max-h-0 opacity-0'
                                        }`}>
                                        <p className='pb-12'>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                            </div>

                </div>
            </section>
        </>
    )
}

export default FAQSection