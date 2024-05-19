"use client"
import { useState } from "react";
import {  FaBars, FaTimes } from "react-icons/fa";

import Link from "next/link";
import { navMenu } from "@/constant/constant";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-100 left-0 z-40 px-5 text-white">
            <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
                {/* logo section */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                  
                Deep<span className="text-3xl italic text-sky-500">Design</span>Web
                </div>
                {/* Menu icon */}
                <div
                    onClick={() => setOpen((prev) => !prev)}
                    className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </div>
                {/* link items */}
                <ul
                    className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"
                        }`}
                >
                    {navMenu.map(({ title, link }) => (
                        <li className="md:ml-8 md:my-0 my-7 font-semibold" key="index">
                            <Link
                                href={link}
                                className="text-white hover:text-blue-400 duration-500"
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                    <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
                        Get Started
                    </button>
                </ul>
                {/* button */}
            </div>
        </div>
    );
};

export default Header;
