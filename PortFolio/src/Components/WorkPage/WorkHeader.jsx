import React from 'react';
import { motion } from 'motion/react';

const WorkHeader = () => {
    return (
        <div className="relative w-full py-12 sm:py-16 md:py-20">
            {/* Main Title with Oscillating Animation */}
            <motion.div
                className="text-center"
                animate={{
                    rotate: [-0.5, 0.5, -0.5]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-4">

                    The Build
                </h1>

                {/* Subtitle */}
                {/* <motion.p
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                </motion.p> */}

                {/* Hand-drawn messy underline */}
                <svg
                    className="mx-auto mt-4"
                    width="600"
                    height="20"
                    viewBox="0 0 600 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        d="M10,10 Q100,5 200,12 T400,8 T590,15 M10,15 Q120,18 250,10 T500,12 T590,8"
                        stroke="#000000"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </motion.div>

            {/* Decorative doodles around header */}
            <div className="absolute top-4 left-8 w-12 h-12 hidden lg:block" style={{ opacity: 0.4 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25,5 L30,15 L45,20 L32,30 L35,45 L25,38 L15,45 L18,30 L5,20 L20,15 Z"
                        stroke="#000000"
                        strokeWidth="2.5"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="absolute top-8 right-12 w-14 h-14 hidden lg:block" style={{ opacity: 0.35 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="18" stroke="#000000" strokeWidth="3" fill="none" />
                    <path d="M15,25 L35,25 M25,15 L25,35" stroke="#000000" strokeWidth="2.5" />
                </svg>
            </div>

            <div className="absolute bottom-4 left-16 w-10 h-10 hidden md:block" style={{ opacity: 0.38 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10,25 L25,10 L40,25 L25,40 Z"
                        stroke="#000000"
                        strokeWidth="2.5"
                        fill="none"
                    />
                </svg>
            </div>
        </div>
    );
};

export default WorkHeader;
