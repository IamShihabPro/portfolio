import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';

import HeroImg from '../../assets/img4.png'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

const handleDownload = () => {
    const fileUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'resume.pdf';
    link.click();
  };

// const handleDownload = () => {
//     // Replace 'resume.pdf' with the actual file name and path
//     const fileUrl = '/resume.pdf';

//     fetch(fileUrl)
//       .then(response => response.blob())
//       .then(blob => {
//         // Create a temporary URL for the downloaded file
//         const url = window.URL.createObjectURL(blob);
//         // Create a link and click it to trigger the download
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = 'resume.pdf';
//         link.click();
//         // Cleanup the temporary URL
//         window.URL.revokeObjectURL(url);
//       })
//       .catch(error => {
//         console.error('Error downloading resume:', error);
//       });
//   };
   
    return (
        <div name="Home" className='h-screen w-full bg-gray-900'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-3xl sm:text-4xl font-bold'>I'm </h2>

                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Full Stack Developer', 'MERN Stack Developer']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        
                    />
                    </span>

                    <p className='py-4 max-w-md'>A passionate web developer with experience in building responsive and user-friendly web applications. I enjoy creating intuitive and visually appealing interfaces.</p>

                    <div className='flex gap-4'>
                        <button className='group text-white w-fit flex items-center rounded-md px-6 py-3 my-2 bg-sky-600 cursor-pointer hover:scale-105 duration-200'> 
                            Projects <span className='ml-2 group-hover:rotate-90 duration-200'><FaArrowRight></FaArrowRight></span>
                        </button>

                        <button onClick={handleDownload} className='group text-white w-fit flex items-center rounded-md px-6 py-3 my-2 bg-sky-600 cursor-pointer hover:scale-105 duration-200'> 
                            Resume <span className='ml-2 '> <a href='resume.pdf' download='resume.pdf' ><BiDownload></BiDownload></a> </span>
                        </button>
                    </div>
                </div>

                <div className='md:ml-4'>
                    <img src={HeroImg} alt="shihab" className='rounded-2xl mx-auto md:w-96 w-2/3 md:ml-16'/>
                    {/* <img src='https://upload.wikimedia.org/wikipedia/commons/9/93/Elon_Musk_Colorado_2022_%28cropped%29.jpg' alt="shihab" className='rounded-2xl mx-auto w-2/3 md:w-96'/> */}
                </div>
            </div>
        </div>
    );
};

export default Home;