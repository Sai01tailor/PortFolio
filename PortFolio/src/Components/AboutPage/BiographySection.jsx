import React from 'react';
import { motion } from 'motion/react';

const BiographySection = () => {
    const hoverVariants = {
        initial: { rotate: 0, scale: 1 },
        hover: {
            rotate: [0, -1, 1, -2, 2, 0],
            scale: 1.02,
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

    return (
        <div className="w-full max-w-6xl px-6 sm:px-12 md:px-20 py-8 md:py-12">
            <motion.div
                className="relative w-full p-8 sm:p-10 md:p-12 lg:p-16 bg-white border-4 border-black"
                style={{
                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                    // Hand-drawn drop shadow effect using solid black offset
                    boxShadow: '8px 8px 0px 0px #000000'
                }}
                variants={hoverVariants}
                initial="initial"
                whileHover="hover"
                whileInView={{ 
                    opacity: [0, 1],
                    y: [30, 0]
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                {/* Punchy Biography Text */}
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-black">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">5</span>th-semester B.Tech CSE student at{' '}
                    <span className="underline decoration-4">SVNIT</span> blending{' '}
                    <span className="font-black bg-black text-white px-2 py-1 inline-block -rotate-1">
                        MERN stack
                    </span>{' '}
                    architecture with{' '}
                    <span className="underline decoration-wavy decoration-4">computer vision</span>{' '}
                    and{' '}
                    <span className="font-black bg-black text-white px-2 py-1 inline-block rotate-1">
                        AI
                    </span>.
                </p>

                {/* Random doodle decoration in corner */}
                <div className="absolute -top-3 -right-3 w-12 h-12 hidden md:block">
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <circle 
                            cx="25" 
                            cy="25" 
                            r="20" 
                            stroke="#000000" 
                            strokeWidth="3" 
                            fill="none"
                        />
                        <circle 
                            cx="25" 
                            cy="25" 
                            r="12" 
                            stroke="#000000" 
                            strokeWidth="2" 
                            fill="none"
                        />
                    </svg>
                </div>

                {/* Random doodle decoration in other corner */}
                <div className="absolute -bottom-3 -left-3 w-10 h-10 hidden md:block">
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M10,25 L40,25 M25,10 L25,40" 
                            stroke="#000000" 
                            strokeWidth="3" 
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
};

export default BiographySection;
