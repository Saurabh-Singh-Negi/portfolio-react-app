import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {HiMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from "../assets/logo1.png";
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] bg-[#0a192f] text-gray-300 flex justify-between items-center px-4">
            <div>
                <img src={Logo} alt="logo-img" className="cursor-pointer w-[100px]" />
            </div>
            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home    
                    </Link>    
                </li>
                <li>
                <Link to='about' smooth={true} duration={500}>
                        About    
                </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills    
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Projects    
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact    
                    </Link>
                </li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {nav ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile menu */}
            <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
                <li className="text-4xl py-6">
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home    
                    </Link> 
                </li>
                <li className="text-4xl py-6">
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About    
                </Link>
                </li>
                <li className="text-4xl py-6">
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills    
                    </Link>
                </li>
                <li className="text-4xl py-6">
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Projects    
                    </Link>
                </li>
                <li className="text-4xl py-6">
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact    
                    </Link></li> 
            </ul>

            {/* social icons */}
            <div className="hidden md:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-between items-center w-full text-gray-300 "
                        href="https://github.com/Saurabh-Singh-Negi">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300 "
                        href="https://www.linkedin.com/in/saurabh-singh-negi-18b320197/">
                            LinkedIn <FaLinkedinIn size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b]">
                        <a className="flex justify-between items-center w-full text-gray-300 "
                        href="/">
                            <Link to="contact" duration={500} smooth={true}>Email</Link>
                             <HiMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
                        <a className="flex justify-between items-center w-full text-gray-300 "
                        href="https://drive.google.com/file/d/1hFfB_8DeLhCWfQi7wcMkZ6R0535gKJgD/view">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        
        </div>
    )
}

export default Navbar;