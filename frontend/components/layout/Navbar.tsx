"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaChevronDown,
    FaSearch,
    FaHeart,
    FaUser,
} from "react-icons/fa";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const menu = [
        { name: "Home", path: "/" },
        {
            name: "Brands",
            path: "#",
            subMenu: [
                { name: "Samsung", path: "/" },
                { name: "Apple", path: "/" },
                { name: "Xiaomi", path: "/" },
                { name: "OnePlus", path: "/" },
            ],
        },
        {
            name: "Series",
            path: "#",
            subMenu: [
                { name: "Samsung A Series", path: "/" },
                { name: "Samsung S Series", path: "/" },
                { name: "iPhone", path: "/" },
            ],
        },
        {
            name: "AI Review",
            path: "/",
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-sky-blue shadow-sm">
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

                                {item.subMenu && (
                                    <FaChevronDown className="text-xs transition duration-200 group-hover:rotate-180" />
                                )}
                            </Link>

                            {item.subMenu && (
                                <div className="pointer-events-none absolute left-0 top-full mt-3 w-56 rounded-lg border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                                    {item.subMenu.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            href={sub.path}
                                            className="block rounded-md px-4 py-2 text-sm text-gray-700 transition hover:bg-sky-50 hover:text-sky-600"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Icons */}
                <div className="hidden items-center gap-5 lg:flex">
                    <button className="text-xl text-gray-700 hover:text-sky-600">
                        <FaSearch />
                    </button>

                    <button className="text-xl text-gray-700 hover:text-sky-600">
                        <FaHeart />
                    </button>

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
                            {item.subMenu ? (
                                <>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(
                                                // @ts-ignore
                                                openDropdown === index ? null : index
                                            )
                                        }
                                        className="flex w-full items-center justify-between rounded-md py-3 font-medium"
                                    >
                                        {item.name}

                                        <FaChevronDown
                                            className={`transition ${openDropdown === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openDropdown === index ? "max-h-60" : "max-h-0"
                                            }`}
                                    >
                                        {item.subMenu.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.path}
                                                className="block rounded-md py-2 pl-5 text-gray-600 hover:bg-sky-50 hover:text-sky-600"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={item.path}
                                    className="block rounded-md py-3 font-medium hover:text-sky-600"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="mt-4 flex items-center justify-center gap-8 border-t pt-5">
                        <FaSearch className="cursor-pointer text-xl hover:text-sky-600" />
                        <FaHeart className="cursor-pointer text-xl hover:text-sky-600" />

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;