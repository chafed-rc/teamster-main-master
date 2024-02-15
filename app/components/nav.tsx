'use client'
import { useState } from "react";
import Link from "next/link";
import codeIcon from '@/public/icons/code-solid.svg'
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // Function to close the menu when clicking outside of it
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className="bg-[#181818] text-white p-4 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-lg font-bold">
                        <Link href="/">
                            <div className="text-lg font-bold flex items-center gap-2"> {/* Make sure the `a` tag is used here for proper navigation */}
                                <span>
                                    <Image
                                        src={codeIcon}
                                        alt="code icon"
                                        width={45}
                                        height={45}
                                    >
                                    </Image>
                                </span>
                                <span className="text-2xl text-[#5CB8E4]">Teamster</span>
                            </div>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        {/* Hamburger Icon */}
                        <button onClick={toggleMenu}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    {/* Menu items hidden on mobile, shown on md screens and up */}
                    <div className={`hidden md:flex space-x-5`}>
                        <Link className="hover:text-gray-300" href="/">
                            <span className="text-xl">Home</span>
                        </Link>
                        <Link className="hover:text-gray-300" href="/about">
                            <span className="text-xl">About</span>
                        </Link>
                        <Link className="hover:text-gray-300" href="/dashboard">
                            <span className="text-xl">Dashboard</span>
                        </Link>
                        <Link className="hover:text-gray-300" href="/signup">
                            <span className="text-xl">Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-animation overflow-x-hidden"></div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-20" onClick={closeMenu}>
                    <div className="bg-black bg-opacity-50" style={{width: '100%', height: '100%'}}></div>
                </div>
            )}
            <div
                className={`fixed top-0 left-0 z-30 h-full bg-[#181818] w-3/5 transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out rounded-r-xl`}
                style={{width: '60%'}}
                onClick={(e) => e.stopPropagation()} // Prevent click inside the menu from closing it
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu}>
                        {/* Close Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Link href="/"><span className="text-white py-2">Home</span></Link>
                    <Link href="/about"><span className="text-white py-2">About</span></Link>
                    <Link href="/dashboard"><span className="text-white py-2">Dashboard</span></Link>
                    <Link href="/signup"><span className="text-white py-2">Sign Up</span></Link>
                </div>
            </div>
        </>
    );
}
