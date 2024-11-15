"use client"
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <section className="fixed w-full" style={{ zIndex: '999' }}>

            <header className="border-b  px-4 sm:px-10 bg-white tracking-wide relative z-50 ">
                <div className="max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4">
                    <a href="#">
                        <img src="/math.png" alt="logo" className="w-40" />
                    </a>

                    {/* Menu Section */}
                    <div
                        id="collapseMenu"
                        className={`${menuOpen ? "block" : "hidden"
                            } lg:block max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
                    >
                        <ul className="lg:flex lg:ml-12 lg:gap-x-2 max-lg:space-y-3" style={{ zIndex: '999' }}>
                            <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                                <a href="#">
                                    <img src="/math.png" alt="logo" className="w-40" />
                                </a>
                            </li>
                            {["Home", "Pages", "Feature", "Blog", "About"].map((item) => (
                                <li key={item} className="max-lg:border-b max-lg:py-3">
                                    <a href="#" className="hover:text-blue-600 text-blue-600 block font-bold transition-all">
                          
                                        <button
                                            className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-green-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                                        >
                                            <span
                                                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                                            >{item}</span>
                                            
                                            <div className="hidden group-hover:block">
                                                <div
                                                    className="rotate-180 group absolute -bottom-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-white bg-purple-800"
                                                >
                                                    <div className="rounded-sm bg-black py-1 px-2">
                                                        <p className="whitespace-nowrap rotate-180">This is {item}</p>
                                                    </div>
                                                    <div
                                                        className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"
                                                    ></div>
                                                </div>
                                            </div>
                                        </button>

                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex ml-auto">
                        <div className="hidden md:block">
                            <button className="bg-blue-100  hover:bg-blue-200 flex items-center transition-all font-semibold rounded-md px-5 py-3">
                                Get started
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[14px] fill-current ml-2"
                                    viewBox="0 0 492.004 492.004"
                                >
                                    <path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z" />
                                </svg>
                            </button>
                        </div>

                        {/* Toggle Menu Icons */}
                        <button onClick={toggleMenu} className="lg:hidden ml-3">
                            {menuOpen ? (
                                <RxCross2 className=" text-gray-800 border p-1 text-4xl rounded-[2px]  border-black" />
                            ) : (
                                <GiHamburgerMenu className=" text-gray-800 border p-1 text-4xl rounded-[2px]  border-black" />
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Navber;
