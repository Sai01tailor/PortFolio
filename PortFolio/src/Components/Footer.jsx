import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaGlobe } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import axiosClient from '../api/axiosClient';

const getSocialIcon = (name = '') => {
    const lower = name.toLowerCase();
    if (lower.includes('email') || lower.includes('mail')) return <FaEnvelope className="text-2xl" />;
    if (lower.includes('github')) return <FaGithub className="text-2xl" />;
    if (lower.includes('linkedin')) return <FaLinkedin className="text-2xl" />;
    if (lower.includes('codeforces')) return <SiCodeforces className="text-2xl" />;
    if (lower.includes('leetcode')) return <SiLeetcode className="text-2xl" />;
    return <FaGlobe className="text-2xl" />;
};

const Footer = () => {
    const [links, setLinks] = useState([]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        let isMounted = true;
        const fetchSocials = async () => {
            try {
                const data = await axiosClient.get('/api/v1/socials');
                if (isMounted && Array.isArray(data)) {
                    setLinks(data.map((item) => ({
                        name: item.name || item.label?.replace(/^\d+\.\s*/, '') || item.id,
                        href: item.href,
                        icon: getSocialIcon(item.name || item.label || item.id),
                    })));
                }
            } catch (err) {
                // Fallback default links on network error
                if (isMounted) {
                    setLinks([
                        { name: 'Email', href: 'mailto:tailorsai123@gmail.com', icon: <FaEnvelope className="text-2xl" /> },
                        { name: 'GitHub', href: 'https://github.com/Sai01tailor', icon: <FaGithub className="text-2xl" /> },
                        { name: 'LinkedIn', href: 'https://linkedin.com/in/sai-tailor', icon: <FaLinkedin className="text-2xl" /> },
                        { name: 'Codeforces', href: 'https://codeforces.com/profile/Sai01tailor', icon: <SiCodeforces className="text-2xl" /> },
                    ]);
                }
            }
        };

        fetchSocials();

        return () => {
            isMounted = false;
        };
    }, []);

    const buttonVariants = {
        initial: { rotate: 0, scale: 1 },
        hover: {
            rotate: [0, -1, 1, -2, 2, 0],
            scale: 1.05,
            transition: {
                rotate: {
                    duration: 0.5,
                    ease: "easeInOut"
                },
                scale: {
                    duration: 0.2
                }
            }
        }
    };

    const arrowVariants = {
        initial: { rotate: 0, y: 0 },
        hover: {
            rotate: [-2, 2, -2, 2, 0],
            y: [-3, -6, -3],
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    return (
        <footer className="relative bg-[#1a1a1a] text-white">
            {/* Torn Paper Edge Top */}
            <div className="absolute top-0 left-0 bg-white w-full overflow-hidden leading-none">
                <svg 
                    className="relative block w-full h-12 sm:h-16 md:h-20" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M0,0 L50,15 L80,8 L120,18 L150,10 L190,20 L220,12 L270,25 L300,15 L340,22 L380,18 L420,28 L460,20 L500,30 L540,22 L580,32 L620,25 L660,35 L700,28 L740,38 L780,30 L820,40 L860,32 L900,42 L940,35 L980,45 L1020,38 L1060,48 L1100,40 L1140,50 L1180,42 L1200,52 L1200,120 L0,120 Z" 
                        fill="#1a1a1a"
                    />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative pt-24 sm:pt-28 md:pt-32 pb-12 px-6 sm:px-12 md:px-20">
                {/* Headline Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
                        LET&apos;S BUILD.
                    </h2>
                    
                    {/* Sketchy Underline */}
                    <div className="relative w-fit mx-auto mb-6">
                        <svg 
                            className="w-64 sm:w-80 md:w-96 h-8 md:h-12" 
                            viewBox="0 0 400 50" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M10,15 Q50,12 100,18 T200,15 T300,20 T390,15" 
                                stroke="white" 
                                strokeWidth="3" 
                                fill="none" 
                                strokeLinecap="round"
                            />
                            <path 
                                d="M15,25 Q60,22 110,28 T210,25 T310,30 T395,25" 
                                stroke="white" 
                                strokeWidth="2.5" 
                                fill="none" 
                                strokeLinecap="round" 
                                opacity="0.8"
                            />
                            <path 
                                d="M8,35 Q55,33 105,38 T205,35 T305,40 T388,35" 
                                stroke="white" 
                                strokeWidth="2" 
                                fill="none" 
                                strokeLinecap="round" 
                                opacity="0.6"
                            />
                        </svg>
                    </div>

                    {/* Subtext */}
                    <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
                        Say Hi.
                    </p>
                </div>

                {/* Link Grid */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16 max-w-4xl mx-auto">
                    {links.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            className="group relative px-8 py-4 border-3 border-white bg-transparent text-white font-bold text-lg flex items-center gap-3 cursor-pointer transition-colors hover:bg-white hover:text-[#1a1a1a]"
                            style={{
                                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                            }}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </motion.a>
                    ))}
                </div>

                {/* Copyright/Credits */}
                <div className="text-center text-gray-400 text-sm md:text-base">
                    <p>© {new Date().getFullYear()} Sai Tailor. Crafted with chaos & creativity.</p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                variants={arrowVariants}
                initial="initial"
                whileHover="hover"
                className="fixed bottom-8 right-8 p-4 border-3 border-white bg-transparent text-white cursor-pointer hover:bg-white hover:text-[#1a1a1a] transition-colors z-50"
                style={{
                    borderRadius: '225px 15px 255px 15px / 15px 255px 15px 225px',
                }}
                aria-label="Scroll to top"
            >
                <FaArrowUp className="text-2xl" />
            </motion.button>
        </footer>
    );
};

export default Footer;
