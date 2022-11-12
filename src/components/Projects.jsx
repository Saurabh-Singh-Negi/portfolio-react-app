import React from 'react';
import emoji from '../assets/project/emoji_identifier.png';

const Projects = () => {
    return (
        <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl fonT-bold inline border-b-4 text-gray-300 border-[#FF5858]'>Projects</p>
                    <p className='py-6'>Check out what I've been working on</p>
                </div>

                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div style={{backgroundImage: `url(${emoji})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Shopify Clone
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://netflix-clone-957cc.web.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="https://github.com/Saurabh-Singh-Negi/Netflix-Clone">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Code</button>
                                </a>
                            </div>

                        </div>

                    </div>
                    <div style={{backgroundImage: `url(${emoji})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Shopify Landing Page
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://shopifyclone-saurabh.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="https://github.com/Saurabh-Singh-Negi/Shopify-Clone">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{backgroundImage: `url(${emoji})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Emoji Identifier
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://lwjc43.csb.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="https://codesandbox.io/s/react-saurabh-lwjc43?file=/src/App.js">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Code</button>
                                </a>
                            </div>

                        </div>

                    </div>
                    <div style={{backgroundImage: `url(${emoji})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Minion Language Translator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{backgroundImage: `url(${emoji})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Cash Register Manager
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://regal-dolphin-0d9566.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="https://github.com/Saurabh-Singh-Negi/Mark-10-Cash-Register-JS">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Code</button>
                                </a>
                            </div>

                        </div>

                    </div>
                    <div style={{backgroundImage: `url(${emoji})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Is you birthday lucky?
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://tranquil-donut-aeb8bf.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="https://github.com/Saurabh-Singh-Negi/Mark11-Is-your-birthday-lucky">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;