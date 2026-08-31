import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from 'motion/react';

const Viewer = ({ isOpen, onClose, name, content, links }) => {
    const hoverVariants = {
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

    // Prevent body scroll when overlay is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    const renderContent = (item) => {
        switch (item.type) {
            case 'heading':
                return (
                    <h2
                        key={item.id}
                        className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 mt-8"
                        style={{
                            textDecoration: 'underline',
                            textDecorationThickness: '3px',
                            textUnderlineOffset: '8px'
                        }}
                    >
                        {item.text}
                    </h2>
                );
            case 'para':
                return (
                    <p
                        key={item.id}
                        className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6"
                    >
                        {item.text}
                    </p>
                );
            case 'image':
                return (
                    <div
                        key={item.id}
                        className="my-8 border-4 border-black p-2"
                        style={{
                            borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px',
                            boxShadow: '6px 6px 0px 0px #000000'
                        }}
                    >
                        <img
                            src={item.src}
                            alt={item.text || 'Content image'}
                            className="w-full h-auto object-cover"
                            style={{
                                borderRadius: '45px 8px 45px 8px / 8px 45px 8px 45px'
                            }}
                        />
                        {item.text && (
                            <p className="text-center text-sm sm:text-base mt-3 font-semibold">
                                {item.text}
                            </p>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[99999] w-screen h-screen bg-white overflow-y-auto border-4 sm:border-8 border-black filter-sketchy-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {/* Fixed Close Button */}
                    <motion.button
                        className="fixed top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 bg-black text-white text-2xl font-bold border-2 border-black flex items-center justify-center z-50 hover:bg-white hover:text-black transition-colors cursor-pointer"
                        style={{
                            borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px',
                            boxShadow: '4px 4px 0px 0px #000000'
                        }}
                        variants={hoverVariants}
                        initial="initial"
                        whileHover="hover"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        ×
                    </motion.button>

                    {/* Corner Doodles */}
                    <div className="fixed top-6 left-6 w-12 h-12 hidden md:block pointer-events-none opacity-30">
                        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5,25 L20,10 L35,25 L20,40 Z"
                                stroke="#000000"
                                strokeWidth="3"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="fixed bottom-6 left-6 w-10 h-10 hidden md:block pointer-events-none opacity-30">
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

                    {/* Modal Content Container */}
                    <div className="relative w-full max-w-5xl mx-auto px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 min-h-full">
                        {/* Title */}
                        <div className="mb-10 text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                                {name}
                            </h1>
                            {/* Hand-drawn underline */}
                            <svg
                                className="mx-auto mt-3"
                                width="300"
                                height="12"
                                viewBox="0 0 300 12"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5,6 Q50,3 100,7 T200,5 T290,8"
                                    stroke="#000000"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        {/* Dynamic Content */}
                        <div className="mb-12">
                            {content && content.map((item) => renderContent(item))}
                        </div>

                        {/* Links Section */}
                        {links && Object.keys(links).length > 0 && (
                            <div className="mt-12 pt-8 border-t-4 border-black border-dashed">
                                <h3 className="text-2xl sm:text-3xl font-black mb-6 text-center">
                                    VIEW MORE
                                </h3>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    {links.source && (
                                        <motion.a
                                            href={links.source}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-white border-4 border-black font-bold text-lg hover:bg-black hover:text-white transition-colors cursor-pointer"
                                            style={{
                                                borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px',
                                                boxShadow: '4px 4px 0px 0px #000000'
                                            }}
                                            variants={hoverVariants}
                                            initial="initial"
                                            whileHover="hover"
                                        >
                                            📂 Source
                                        </motion.a>
                                    )}
                                    {links.live && (
                                        <motion.a
                                            href={links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-white border-4 border-black font-bold text-lg hover:bg-black hover:text-white transition-colors cursor-pointer"
                                            style={{
                                                borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px',
                                                boxShadow: '4px 4px 0px 0px #000000'
                                            }}
                                            variants={hoverVariants}
                                            initial="initial"
                                            whileHover="hover"
                                        >
                                            🚀 Live
                                        </motion.a>
                                    )}
                                    {links.certificate && (
                                        <motion.a
                                            href={links.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-white border-4 border-black font-bold text-lg hover:bg-black hover:text-white transition-colors cursor-pointer"
                                            style={{
                                                borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px',
                                                boxShadow: '4px 4px 0px 0px #000000'
                                            }}
                                            variants={hoverVariants}
                                            initial="initial"
                                            whileHover="hover"
                                        >
                                            🏆 Certificate
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Back / Close button at bottom */}
                        <div className="mt-12 text-center">
                            <motion.button
                                onClick={onClose}
                                className="px-8 py-3 bg-black text-white font-bold text-lg border-2 border-black hover:bg-white hover:text-black transition-colors cursor-pointer"
                                style={{
                                    borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px',
                                    boxShadow: '4px 4px 0px 0px #000000'
                                }}
                                variants={hoverVariants}
                                initial="initial"
                                whileHover="hover"
                            >
                                ← BACK TO PROJECTS
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Viewer;
