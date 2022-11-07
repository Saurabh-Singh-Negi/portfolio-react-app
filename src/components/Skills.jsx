import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import TAILWIND from '../assets/tailwind.png';
import JAVASCRIPT from '../assets/javascript.png';
import REACT from '../assets/react.png';
import GITHUB from '../assets/github.png';

const Skills = () => {
    return (
        <div name="skills" className='bg-[#0a192f] w-full h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col items-stretch w-full h-full'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-[#FF5858] inline-block text-gray-300'>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='flex flex-wrap gap-4 text-center justify-between lg:justify-start'>
                    <div className='shadow-md shadow-[#040c16] px-5 py-2 md:px-[4rem] md:py-5 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={HTML} alt="html icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]  px-5 py-2 md:px-[4rem] md:py-5 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="html icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] px-5 py-2 md:px-[4rem] md:py-5 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={TAILWIND} alt="html icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] px-5 py-2 md:px-[4rem] md:py-5 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JAVASCRIPT} alt="html icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] px-5 py-2 md:px-[4rem] md:py-5 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={REACT} alt="html icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] px-5 py-2 md:px-[4rem] md:py-5 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GITHUB} alt="html icon" />
                        <p className='my-4'>Github</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Skills;