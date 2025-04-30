import React, { useState } from 'react'
import upAerrow from '../assets/images/SVG/arrow-down-s-line.svg' 
const FAQList = [
    {
        question: 'Is there any payment fee?',
        answer: 'Winners are ranked by ROI based on real-time token performance. Top-ranked users take home the prize pool.'
    },
    {
        question: 'What kinds of contests are available?',
        answer: 'Winners are ranked by ROI based on real-time token performance. Top-ranked users take home the prize pool.'
    },
    {
        question: 'What’s the entry fee and how are rewards paid?',
        answer: 'Winners are ranked by ROI based on real-time token performance. Top-ranked users take home the prize pool.'
    },
    {
        question: 'Can I change my picks after entering?',
        answer: 'Yes, a small payment fee may apply depending on your payment method.Yes,a small payment fee may apply depending on your payment method. a small payment fee may apply depending on your payment method.'
    },
    {
        question: 'What happens if my token gets rugged or delisted?',
        answer: 'htts//sddsf//sdfs  Yes, a small payment fee may apply depending on your payment method.Yes,a small payment fee may apply depending on your payment method. a small payment fee may apply depending on your payment method.'
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
                                    <div className='flex border-t border-gray-900   py-8 justify-between pr-8' onClick={() => ToggleFAQ(index)}>
                                    <h3 className=' tracking-wide text-2xl'>{item.question}</h3>
                                        <img
                                            className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                            src={upAerrow}
                                            alt='Toggle Answer'
                                        />
                                    </div>
                                    <div className={` items-center text-start text-2xl font-normal max-w-[660px] text-gray-500 overflow-hidden transition-all duration-1000 ${openIndex === index ? 'max-h-96 opacity-100 mt-[-20px] ' : 'max-h-0 opacity-0'
                                        }`}>
                                        <p className='pb-4'>{item.answer}</p>
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