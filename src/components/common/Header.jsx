import React from 'react'
import logo from '../../assets/images/logo.png';


function Header() {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='flex justify-between text-center items-center py-6' >
                        <a href='#'><img className=' w-100 max-w-[109px] cursor-pointer' src={logo} alt='logo' /></a>
                        <nav>
                            <ul className='  text-lightGray   gap-7 flex cursor-pointer'>
                                <li>
                                    <a href=''>How it works</a>
                                </li>
                                <li>
                                    <a href=''>Contests</a>
                                </li>
                                <li>
                                    <a href=''>Stats</a>
                                </li>
                            </ul>
                        </nav>
                        

                           <a className='btn-green' ><span className='text-gradiant-green'>launch app</span></a>
                       
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header