import React from 'react';
const Header = () => {
    return (
        <header className="p-8 fixed w-full h-[80px]">
            <div className="mt-5 flex flex-row-reverse">
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">Home</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">About</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">Skills</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">Projects</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:border-violet-400">Contacts</a>
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