'use client'

import Link from 'next/link'
import {
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
    FaArrowUp,
} from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
    const footerLinks = [
        {
            title: 'Explore',
            links: [
                'Rollable Tech',
                'Compare Devices',
                'Performance Benchmarks',
                'Photography Masterclass',
                'Enterprise Solutions',
                'Best Processors',
            ],
        },
        {
            title: 'Resources',
            links: [
                'User Guides',
                'AI Prediction Blog',
                'Smartphone News',
                'Glossary of Terms',
                'FAQ',
            ],
        },
        {
            title: 'Legal',
            links: [
                'Terms of Service',
                'Privacy Policy',
                'Cookie Policy',
                'Affiliate Disclosure',
            ],
        },
    ]

    return (
        <>
            <footer className="bg-[#081321] text-gray-300">
                <div className="container-1 py-14 px-2">
                    {/* Top */}
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
                        {/* Logo */}
                        <div className='col-span-2'>
                            <Link
                                href="/"
                                className="text-2xl font-bold text-white flex items-center gap-2"
                            >
                                📱 Mobile Info Pro
                            </Link>

                            <p className="w-full md:w-[70%] mt-5 text-sm leading-7 text-gray-400">
                                Mobile Info Pro is your premier destination for detailed insights,
                                objective comparisons, and AI-powered recommendations for every
                                smartphone. From flagship revolutions to enterprise efficiency, we
                                clarify the complex to empower your next choice with complete
                                confidence.
                            </p>
                        </div>

                        {/* Links */}
                        {footerLinks.map((item) => (
                            <div key={item.title}>
                                <h3 className="text-white font-semibold mb-5">
                                    {item.title}
                                </h3>

                                <ul className="space-y-3">
                                    {item.links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="/"
                                                className="text-sm text-gray-400 hover:text-sky-400 transition"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="my-6 border-t border-white/10"></div>

                    {/* Bottom */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        {/* Social */}
                        <div className="flex items-center gap-5">
                            {[
                                RiTwitterXLine,
                                FaFacebookF,
                                FaLinkedinIn,
                                FaYoutube,
                                FaInstagram,
                            ].map((Icon, index) => (
                                <Link
                                    key={index}
                                    href="/"
                                    className="text-gray-400 hover:text-sky-400 transition"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                            <p className="text-sm text-gray-500 text-center lg:text-right">
                                © 2026 Mobile Info Pro. All rights reserved.
                                <br />
                                Clarifying the Future of Mobile.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="fixed bottom-2 right-2 z-50">
                <button
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-500 px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition"
                >
                    <FaArrowUp />
                </button>
            </div>
        </>
    )
}

export default Footer