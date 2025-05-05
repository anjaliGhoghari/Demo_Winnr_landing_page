import React from 'react'
import logo from '../../assets/images/logo.png';
 // for React Router navigation
import { Link } from 'react-scroll';


function Header() {
    return (
        <>
            <header className='sticky z-50 top-0 bg-darkBg'>
                <div className='container '>
                    <div className='flex justify-between text-center items-center py-6' >
                    <Link to="hero-section" smooth={true} duration={700}><img className='w-100 max-w-[109px] cursor-pointer' src={logo} alt='logo' /></Link>
                        <nav>
                            <ul className='  text-lightGray   gap-7 flex cursor-pointer'>
                                <li>
                                    <Link to="/how-it-works" smooth={true} duration={700}>How it works</Link>
                                </li>
                                <li>
                                <Link to="/contest-formats" smooth={true} duration={700}>Contests</Link>
                                </li>
                                {/* <li>
                                    <a href=''>Stats</a>
                                </li> */}
                            </ul>
                        </nav>


                        <a className='btn-green' href="http://app.winnr.fun/" ><span className='text-gradiant-green'>launch app</span></a>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header