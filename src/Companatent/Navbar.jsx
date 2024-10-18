import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

    const onToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    return (
        <div>
            <div className="shadow-2xl bg-white/30 backdrop-filter backdrop-blur-sm brightness-75 w-full h-[100px]">
                <header>
                    <nav className="flex justify-between items-center w-[96%] mx-8 h-full">
                        <div className="flex items-center">
                            <img className="w-[180px] h-[160px]" src="/Assest/logo-teat.png" alt="Logo" />
                        </div>
                        <div
                            className={`nav-link duration-500 md:static absolute md:min-h-fit min-h-[50vh] left-0 ${isMenuOpen ? 'top-[100px]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-10 bg-white/30 backdrop-filter backdrop-blur-md`}
                        >
                            <ul className="flex text-2xl text-white font-serif md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                                <li>
                                    <a className="hover:text-gray-500 hover:underline-offset-4 leading-5" href="#">Home</a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-500" href="#">About</a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-500" href="#">Cluster</a>
                                </li>
                                <li>
                                    <a className="hover:text-gray-500" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="bg-cyan-600 text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                                Sign In
                            </button>
                            <CiMenuBurger onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden" />
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}
