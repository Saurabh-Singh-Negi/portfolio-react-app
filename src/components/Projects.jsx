import React from 'react';
import emoji from '../assets/project/emoji_identifier.png';
// import netflix from '../assets/project/netflix.png';
import shopify from '../assets/project/shopify.png';
import minion from '../assets/project/minions_translator.png';
import wecare from '../assets/project/wecare.png';
import shoppingCart from '../assets/project/shoppingCart.png';
import bookfinder from '../assets/project/bookfinder.png';

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
                    <div style={{backgroundImage: `url(${wecare})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Wecare App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://wetakecare.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="https://github.com/Saurabh-Singh-Negi/HealthCare-App">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Code</button>
                                </a>
                            </div>

                        </div>

                    </div>
                    <div style={{backgroundImage: `url(${shoppingCart})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Redux Shopping Cart
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://shopping-store-redux.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="https://github.com/Saurabh-Singh-Negi/Shopping-Cart">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${shopify})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

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
                    <div style={{backgroundImage: `url(${bookfinder})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Bookfinder
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://yourbookpedia.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="https://github.com/Saurabh-Singh-Negi/Book-Finder-Application">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Code</button>
                                </a>
                            </div>

                        </div>

                    </div>
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
                    <div style={{backgroundImage: `url(${minion})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Minion Language Translator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://englishtominionspeak.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-;g'>Demo</button>
                                </a>
                                <a href="https://github.com/Saurabh-Singh-Negi/neogcamp-banana-speak">
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