import React from 'react';
import { motion } from 'motion/react';
import WorkItem from './WorkItem';

const Grid = ({ projects }) => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12">
            {/* Polaroid/Taped Effect Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id || index}
                        className="relative"
                        initial={{ opacity: 0, y: 50, rotate: 0 }}
                        whileInView={{ 
                            opacity: 1, 
                            y: 0,
                            // Add slight random rotation for "taped" effect
                            rotate: index % 3 === 0 ? -2 : index % 3 === 1 ? 1 : -1
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.1
                        }}
                    >
                        {/* Duct Tape Effect - Top */}
                        <div 
                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-black z-10"
                            style={{
                                borderRadius: '3px',
                                boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                opacity: 0.8
                            }}
                        />

                        {/* Duct Tape Effect - Bottom (alternate positions) */}
                        {index % 2 === 0 && (
                            <div 
                                className="absolute -bottom-4 right-4 w-16 h-8 bg-black z-10 rotate-12"
                                style={{
                                    borderRadius: '3px',
                                    boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                    opacity: 0.8
                                }}
                            />
                        )}

                        {/* Work Item */}
                        <WorkItem
                            name={project.name}
                            imageSrc={project.imageSrc}
                            description={project.description}
                            content={project.content}
                            links={project.links}
                        />

                        {/* Random corner pins/thumbtacks effect */}
                        <div 
                            className="absolute top-2 right-2 w-3 h-3 bg-red-600 rounded-full border-2 border-black z-20"
                            style={{ boxShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Optional: "The Grind" Badge Section */}
            <motion.div
                className="mt-16 mx-auto max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
                <div 
                    className="relative bg-white border-4 border-black p-8 text-center"
                    style={{
                        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                        boxShadow: '8px 8px 0px 0px #000000'
                    }}
                >
                    {/* Duct Tape Top */}
                    <div 
                        className="absolute -top-4 left-1/4 w-24 h-8 bg-black"
                        style={{
                            borderRadius: '3px',
                            opacity: 0.8
                        }}
                    />
                    <div 
                        className="absolute -top-4 right-1/4 w-24 h-8 bg-black"
                        style={{
                            borderRadius: '3px',
                            opacity: 0.8
                        }}
                    />

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 underline decoration-4">
                        THE GRIND
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                        <div className="p-4 border-4 border-black bg-yellow-100" style={{ borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px' }}>
                            <p className="text-2xl sm:text-3xl font-black mb-2">🔥 Codeforces</p>
                            <p className="text-xl sm:text-2xl font-bold">Rating: 1210</p>
                            <p className="text-lg">Specialist Level</p>
                        </div>
                        
                        <div className="p-4 border-4 border-black bg-green-100" style={{ borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px' }}>
                            <p className="text-2xl sm:text-3xl font-black mb-2">💻 LeetCode</p>
                            <p className="text-xl sm:text-2xl font-bold">Problems Solved: 500+</p>
                            <p className="text-lg">Active Streak: 30 days</p>
                        </div>
                    </div>

                    {/* Jagged badge decoration */}
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 hidden md:block">
                        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M25,5 L30,15 L45,20 L32,30 L35,45 L25,38 L15,45 L18,30 L5,20 L20,15 Z" 
                                stroke="#000000" 
                                strokeWidth="3" 
                                fill="#FFD700"
                            />
                        </svg>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Grid;
