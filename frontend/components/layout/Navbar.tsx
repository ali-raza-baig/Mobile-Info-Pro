"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
    FaBars,
    FaTimes,
    FaChevronDown,
    FaSearch,
    FaHeart,
    FaUser,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [search, setSearch] = useState('')
    const [isScrolled, setIsScrolled] = useState(false);

    const menu = [
        { name: "Home", path: "/" },
        {
            name: "Brands",
            path: "#",
        },
        {
            name: "Collection",
            path: "/collection",
        },
        {
            name: "Blogs",
            path: "/blog",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={` ${isScrolled ? 'fixed z-100 w-full bg-sky-blue p-2 transition-all duration-500' : 'hidden'}`}>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    {/* Logo */}
                    <Link href="/" className="hidden lg:block text-2xl font-bold">
                        Mobile <span className="text-sky-600">Info</span>
                    </Link>

                    <div className="max-w-3xl flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100">

                        {/* Search Icon */}
                        <div className="pl-5 text-gray-400">
                            <FiSearch size={22} />
                        </div>

                        {/* Input */}
                        <input
                            type="text"
                            name="search"
                            value={search} onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by mobile name, brand, model..."
                            className="h-14 w-full bg-transparent px-1 lg:px-4 text-gray-700 placeholder:text-gray-400 outline-none"
                        />

                        {/* Button */}
                        <Link href={`/collection?search=${search}`} className="m-2 flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-300 active:scale-95"

                        >
                            <FiSearch className="hidden lg:block" />
                            Search
                        </Link>
                    </div>
                </div>
            </nav>

            <header className={`${isScrolled ? '' : "sticky top-0 z-20 border-b border-slate-200 bg-sky-blue shadow-sm"}`}>
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold">
                        Mobile <span className="text-sky-600">Info</span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        {menu.map((item) => (
                            <div
                                key={item.name}
                                className="group relative"
                            >
                                <Link
                                    href={item.path}
                                    className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-sky-600"
                                >
                                    {item.name}

                                </Link>

                            </div>
                        ))}
                    </nav>

                    {/* Desktop Icons */}
                    <div className="hidden items-center gap-5 lg:flex">
                        <button className="text-xl text-gray-700 hover:text-sky-600">
                            <FaSearch />
                        </button>

                        {/* <button className="text-xl text-gray-700 hover:text-sky-600">
                        <FaHeart />
                    </button> */}

                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="text-2xl text-gray-700 lg:hidden"
                    >
                        {mobileMenu ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`z-10 overflow-hidden border-t bg-white transition-all duration-300 lg:hidden ${mobileMenu ? "max-h-screen" : "max-h-0"
                        }`}
                >
                    <div className="space-y-2 px-4 py-4">
                        {menu.map((item, index) => (
                            <div key={item.name}>

                                <Link
                                    href={item.path}
                                    className="block rounded-md py-3 font-medium hover:text-sky-600"
                                >
                                    {item.name}
                                </Link>

                            </div>
                        ))}

                        <div className="mt-4 flex items-center justify-center gap-8 border-t pt-5">
                            <FaSearch className="cursor-pointer text-xl hover:text-sky-600" />
                            {/* <FaHeart className="cursor-pointer text-xl hover:text-sky-600" /> */}

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;