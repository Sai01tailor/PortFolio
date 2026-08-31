import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import TextType from '../TextType';

const Hero = () =>{
    return (
        <>
        
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <defs>
                <filter id="sketchy">
                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </defs>
        </svg>
        {/* {Room Back} */}
        <div className='h-[100vh] w-screen bg-white flex justify-center items-center overflow-hidden' style={{ perspective: '1000px' }}>
            {/* Left panel - hidden on mobile, shown on md+ */}
            <div 
                className='h-[50%] w-full md:h-[70%] md:w-[50%] bg-white border-2 border-r-0 text-3xl flex items-center justify-center origin-right'
                style={{ 
                    transform: 'rotateY(45deg)',
                    filter: 'url(#sketchy)'
                }}
            >
                <motion.div className='text-center px-4'>
                    <TextType className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline font-bold text-white [text-stroke:2px_black] [-webkit-text-stroke:2px_black]' text={"'Hey"} cursorCharacter='' initialDelay={0}/>
                    <TextType className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white [text-stroke:2px_black] [-webkit-text-stroke:2px_black]' text={' '} cursorCharacter='' initialDelay={0}/>
                    <TextType className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-black text-white shadow -rotate-2' text={' There '} cursorCharacter='' initialDelay={200}/>
                </motion.div>
            </div>
            <div 
                className='h-[50%] w-full md:h-[70%] md:w-[50%] bg-white border-2 border-inner text-3xl flex items-center justify-center origin-left'
                style={{ 
                    transform: 'rotateY(-45deg)',
                    boxShadow:'20 20 200 black',
                    filter: 'url(#sketchy)'
                }}
            >
                <motion.div className='text-center px-4'>
                    <TextType className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline font-bold text-white [text-stroke:2px_black] [-webkit-text-stroke:2px_black]' text={'I Am'} cursorCharacter='' initialDelay={700}/>
                    <TextType className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold' text={' Sai Tailor'} cursorCharacter='' initialDelay={900}/>
                </motion.div>
            </div>
            <div 
                className='h-[100%] w-full absolute bottom-0 bg-white border-2 text-3xl flex items-center justify-center overflow-hidden' 
                style={{ 
                    transform: 'rotateX(90deg) translateY(85%) rotateZ(45deg)',
                    transformOrigin: 'bottom center',
                    boxShadow:'20 20 200 black',
                    filter: 'url(#sketchy)'
                }}
            >
                {/* Checkered tile pattern */}
                <div className='w-full h-full grid grid-cols-8 grid-rows-6'>
                    {Array.from({ length: 64 }).map((_, index) => (
                        <div 
                            key={index} 
                            className={`${(Math.floor(index / 8) + index) % 2 === 0 ? 'bg-black' : 'bg-white'} border border-gray-400`}
                        />
                    ))}
                </div>
            </div>
        </div></>)
}
export default Hero;
