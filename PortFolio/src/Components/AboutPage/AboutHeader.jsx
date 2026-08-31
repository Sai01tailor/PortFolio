import React from 'react';
import { motion } from 'motion/react';

const AboutHeader = () => {
    // Continuous oscillation animation between -1deg and 1deg
    const oscillateVariants = {
        animate: {
            rotate: [-1, 1, -1],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="w-full py-12 sm:py-16 md:py-20 flex items-center justify-center bg-white">
            <motion.div 
                className="relative flex flex-col items-center"
                variants={oscillateVariants}
                animate="animate"
            >
                {/* Main Headline - matching your existing font style */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-black tracking-tight mb-4 text-center px-4">
                    WHO AM I?
                </h1>

                {/* Hand-drawn Messy Underline SVG - matching your sketchy aesthetic */}
                <svg 
                    className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] h-16 md:h-20 -mt-2" 
                    viewBox="0 0 700 80" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* First messy line */}
                    <path 
                        d="M20,25 Q80,18 140,28 T260,22 T380,30 T500,24 T620,32 T680,26" 
                        stroke="#000000" 
                        strokeWidth="4" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    
                    {/* Second overlapping line */}
                    <path 
                        d="M15,35 Q75,30 135,40 T255,34 T375,42 T495,36 T615,44 T685,38" 
                        stroke="#000000" 
                        strokeWidth="3.5" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.9"
                    />
                    
                    {/* Third messy line */}
                    <path 
                        d="M25,48 Q85,42 145,52 T265,46 T385,54 T505,48 T625,56 T675,50" 
                        stroke="#000000" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.8"
                    />
                    
                    {/* Fourth scratchy line */}
                    <path 
                        d="M18,58 Q78,55 138,62 T258,58 T378,65 T498,60 T618,67 T682,62" 
                        stroke="#000000" 
                        strokeWidth="2.5" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.6"
                    />
                    
                    {/* Random scratchy marks for extra mess */}
                    <path 
                        d="M100,20 L105,30 M200,18 L205,28 M300,22 L305,32 M400,20 L405,30 M500,24 L505,34 M600,22 L605,32" 
                        stroke="#000000" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeLinecap="round"
                        opacity="0.5"
                    />
                </svg>

                {/* Optional: Add some random doodle marks around - matching your sketchy style */}
                <div className="absolute -top-4 -left-4 w-8 h-8 hidden md:block">
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M10,10 Q15,20 20,10 T30,10 T40,10" 
                            stroke="#000000" 
                            strokeWidth="2" 
                            fill="none" 
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="absolute -top-6 -right-6 w-10 h-10 hidden md:block">
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <circle 
                            cx="25" 
                            cy="25" 
                            r="15" 
                            stroke="#000000" 
                            strokeWidth="2" 
                            fill="none" 
                            strokeDasharray="3,3"
                        />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutHeader;
