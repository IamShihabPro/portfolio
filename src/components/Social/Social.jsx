import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Social = () => {
    const links = [
        {
            id: 1,
            social: <><FaLinkedin size={30}></FaLinkedin> </>,
            href: '',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            social: <> <FaGithub size={30}></FaGithub> </>,
            href: '',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            social: <> <GrMail size={30}></GrMail> </>,
            href: '',
            style: 'rounded-tr-md'
        },
  
    ]

    return (
        <div className='flex flex-col top-[35%] right-0 z-50 fixed'>
            <ul>
               {
                 links.map( link => (<li className='flex justify-between items-center w-40 h-14 px-4  duration-300 bg-gray-600 mr-[-100px]'> <a href='' className='flex justify-between items-center w-full text-white'> {link.social}</a> </li>))
               }

                {/* <li className='flex justify-between items-center w-40 h-14 px-4 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 ml-[-100px]'> <a href="" className='flex justify-between items-center w-full text-white'> <>LinkedIn</> <FaLinkedin size={30}></FaLinkedin> </a> </li> */}
            </ul>
            
        </div>
    );
};

export default Social;