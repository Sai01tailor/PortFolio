import React, { useState } from 'react';
import { motion } from 'motion/react';
import Viewer from '../Viewer';

const WorkItem = ({ name, imageSrc, description, content, links }) => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);

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

    return (
        <>
            <motion.div
                className='relative w-full h-full bg-white border-4 border-black p-4 cursor-pointer overflow-hidden'
                style={{
                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                    boxShadow: '6px 6px 0px 0px #000000'
                }}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileInView={{
                    opacity: [0, 1],
                    y: [30, 0]
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                }}
                onClick={() => setIsViewerOpen(true)}
            >
                {/* Image Container */}
                <div 
                    className="w-full h-48 sm:h-56 md:h-64 mb-4 overflow-hidden border-2 border-black"
                    style={{
                        borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px'
                    }}
                >
                    <img
                        src={imageSrc}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Project Name */}
                <h3 className="text-2xl sm:text-3xl font-black mb-3 underline decoration-4">
                    {name}
                </h3>

                {/* Short Description */}
                {description && (
                    <p className="text-base sm:text-lg leading-relaxed mb-4 line-clamp-3">
                        {description}
                    </p>
                )}

                {/* View Details Button */}
                <motion.button
                    className="w-full mt-2 px-4 py-2 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition-colors"
                    style={{
                        borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px'
                    }}
                    whileHover={{ scale: 1.02 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsViewerOpen(true);
                    }}
                >
                    VIEW DETAILS →
                </motion.button>

                {/* Corner Doodle */}
                <div className="absolute -top-2 -right-2 w-8 h-8 hidden sm:block" style={{ opacity: 0.4 }}>
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <circle 
                            cx="25" 
                            cy="25" 
                            r="15" 
                            stroke="#000000" 
                            strokeWidth="3" 
                            fill="none"
                        />
                        <circle 
                            cx="25" 
                            cy="25" 
                            r="8" 
                            stroke="#000000" 
                            strokeWidth="2" 
                            fill="#000000"
                        />
                    </svg>
                </div>

                {/* Bottom Doodle */}
                <div className="absolute -bottom-2 -left-2 w-6 h-6 hidden sm:block" style={{ opacity: 0.35 }}>
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M10,25 L25,10 L40,25 L25,40 Z" 
                            stroke="#000000" 
                            strokeWidth="2.5" 
                            fill="none"
                        />
                    </svg>
                </div>
            </motion.div>

            {/* Viewer Modal */}
            <Viewer
                isOpen={isViewerOpen}
                onClose={() => setIsViewerOpen(false)}
                name={name}
                content={content}
                links={links}
            />
        </>
    );
};

export default WorkItem;
