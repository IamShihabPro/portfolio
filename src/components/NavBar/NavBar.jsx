import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import Typewriter from 'react-typewriter-effect';
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const navItems = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Experience'
        },
        {
            id: 4,
            link: 'Portfolio'
        },
        {
            id: 5,
            link: 'Contact'
        },
    ]
    
    return (
        <div className='flex justify-between items-center w-full h-20 text-white fixed bg-gray-900 px-6 z-50'>
            <div>
                <h1 className='text-4xl font-bold'>SHIHAB</h1>
            </div>

            <ul className='hidden md:flex'>

                {
                    navItems.map(({link, id}) =>(
                        <li key={id} className='px-4 cursor-pointer font-medium hover:scale-105 duration-200 hover:text-blue-500'> <Link to={link} smooth duration={500} >{link}</Link> </li>
                    ))
                }

            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
                {nav ? <FaTimes size={30}> </FaTimes> : <FaBars size={30}></FaBars> }
            </div>

            {
                nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-900'>
               
                    {
                        navItems.map(({link, id})  =>(
                            <li key={id} className='px-4 py-6 cursor-pointer text-2xl'><Link to={link} smooth duration={500} >{link}</Link></li>
                        ))
                    }
                </ul>
                )
            }

           
        </div>
    );
};

export default NavBar;