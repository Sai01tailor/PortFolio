import React from "react";
import {motion} from 'motion/react'
import TextType from "../TextType";
import { Link } from "react-router-dom";

const AboutMe = () =>{
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
        <motion.div className='m-0 p-0 min-h-screen w-full filter-sketchy-light bg-white border-8 flex flex-col items-center justify-center py-12 px-4 sm:px-6 relative'>
            {/* Random Doodle 1 - Top Left */}
            <div className="absolute top-12 left-8 w-16 h-16 hidden lg:block" style={{ opacity: 0.3 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M10,25 Q15,15 25,20 T40,25 Q35,35 25,30 T10,25" 
                        stroke="#000000" 
                        strokeWidth="2.5" 
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Random Doodle 2 - Top Right */}
            <div className="absolute top-24 right-16 w-14 h-14 hidden lg:block" style={{ opacity: 0.5 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <polygon 
                        points="25,5 45,45 5,45" 
                        stroke="#000000" 
                        strokeWidth="2.5" 
                        fill="none"
                    />
                    <circle cx="25" cy="30" r="8" stroke="#000000" strokeWidth="2" fill="none"/>
                </svg>
            </div>

            {/* Random Doodle 3 - Bottom Left */}
            <div className="absolute bottom-20 left-24 w-12 h-12 hidden md:block" style={{ opacity: 0.4 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M5,25 L45,25 M25,5 L25,45 M15,15 L35,35 M35,15 L15,35" 
                        stroke="#000000" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Random Doodle 4 - Bottom Right */}
            <div className="absolute bottom-32 right-12 w-16 h-16 hidden md:block" style={{ opacity: 0.35 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="18" stroke="#000000" strokeWidth="2.5" fill="none"/>
                    <circle cx="25" cy="25" r="10" stroke="#000000" strokeWidth="2" fill="none"/>
                    <circle cx="25" cy="25" r="4" stroke="#000000" strokeWidth="2" fill="#000000"/>
                </svg>
            </div>

            {/* Main Content with Brutalist Wrapper */}
            <motion.div 
                className="relative w-full max-w-5xl p-6 sm:p-8 md:p-10 lg:p-16 bg-white border-4 border-black mb-8 mx-4 sm:mx-6"
                style={{
                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
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
                {/* Title */}
                <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-x-2">
                    <TextType className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline font-bold text-white [text-stroke:2px_black] [-webkit-text-stroke:2px_black]' text={'About'} cursorCharacter='' initialDelay={700}/>
                    <TextType className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold' text={' Me'} cursorCharacter='' initialDelay={900}/>
                </div>

                {/* Content */}
                <motion.p className="filter-none text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">I</span> am a fifth-semester B.Tech student at{' '}
                    <span className="underline decoration-4">SVNIT</span> and an active competitive programmer with a{' '}
                    <span className="font-black bg-black text-white px-2 py-1 inline-block -rotate-1">1210 rating</span>{' '}
                    on Codeforces. I specialize in Full-Stack Web Development using the{' '}
                    <span className="font-black bg-black text-white px-2 py-1 inline-block rotate-1">MERN stack</span>{' '}
                    and am proficient in Python, with a growing focus on AI/ML applications. I am passionate about engineering scalable technology solutions and applying strong core computer science fundamentals to solve complex problems.
                </motion.p>

                {/* Corner Doodles */}
                <div className="absolute -top-3 -right-3 w-12 h-12 hidden md:block">
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M5,25 L20,10 L35,25 L20,40 Z" 
                            stroke="#000000" 
                            strokeWidth="3" 
                            fill="none"
                        />
                    </svg>
                </div>

                <div className="absolute -bottom-3 -left-3 w-10 h-10 hidden md:block">
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <rect 
                            x="10" 
                            y="10" 
                            width="30" 
                            height="30" 
                            stroke="#000000" 
                            strokeWidth="3" 
                            fill="none"
                            transform="rotate(45 25 25)"
                        />
                    </svg>
                </div>
            </motion.div>

            {/* Read More Link */}
            <motion.div
                whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
                transition={{ duration: 0.3 }}
            >
                <Link 
                    to='/about-me' 
                    className="text-base sm:text-lg md:text-xl font-bold hover:underline border-2 border-black px-4 sm:px-6 py-2 sm:py-3 bg-white"
                    style={{
                        borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px'
                    }}
                >
                    Read More ----&gt;
                </Link>
            </motion.div>
        </motion.div> 
    )
}
export default AboutMe;