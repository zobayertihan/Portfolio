import React from 'react';
import { Link } from 'react-scroll'
const Header = () => {
    return (
        <header className="p-8 fixed w-full h-[80px] bg-[#2B3467]">
            <div className="flex flex-row-reverse">
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link to="resume" spy={true} smooth={true} duration={500} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">Home</Link>
                    </li>
                    <li className="flex">
                        <Link to="about" spy={true} smooth={true} duration={500} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">About</Link>
                    </li>
                    <li className="flex">
                        <Link to="skills" spy={true} smooth={true} duration={500} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">Skills</Link>
                    </li>
                    <li className="flex">
                        <Link to="projects" spy={true} smooth={true} duration={500} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">Projects</Link>
                    </li>
                    <li className="flex">
                        <Link to="contacts" spy={true} smooth={true} duration={500} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">Contacts</Link>
                    </li>
                </ul>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;