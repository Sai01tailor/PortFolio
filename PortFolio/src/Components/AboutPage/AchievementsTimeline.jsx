import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import axiosClient from '../../api/axiosClient';

const AchievementsTimeline = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchTimeline = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await axiosClient.get('/api/v1/timeline');
                if (isMounted) {
                    setAchievements(Array.isArray(data) ? data : []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Failed to load timeline.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchTimeline();

        return () => {
            isMounted = false;
        };
    }, []);

    const containerVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, scale: 0.8, x: -20 },
        animate: { 
            opacity: 1, 
            scale: 1, 
            x: 0,
            transition: {
                duration: 0.5,
                type: 'spring',
                stiffness: 100
            }
        }
    };

    const hoverVariants = {
        initial: { rotate: 0, scale: 1 },
        hover: {
            rotate: [0, -2, 2, -1, 1, 0],
            scale: 1.05,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="w-full px-6 sm:px-12 md:px-20 py-12 md:py-16">
            {/* Section Title */}
            <motion.h2 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                ACHIEVEMENTS
            </motion.h2>

            {loading ? (
                <div className="py-20 text-center">
                    <p className="text-2xl font-black tracking-widest animate-pulse">
                        LOADING TIMELINE...
                    </p>
                </div>
            ) : error ? (
                <div className="max-w-md mx-auto p-4 border-2 border-red-500 bg-red-50 text-red-700 font-bold rounded text-center">
                    {error}
                </div>
            ) : (
                /* Timeline Container */
                <motion.div 
                    className="relative max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Jagged Vertical Line - Center for desktop, left for mobile */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 md:transform md:-translate-x-1/2 z-0">
                        <svg 
                            className="w-2 md:w-3 h-full" 
                            viewBox="0 0 20 800" 
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Jagged thick line */}
                            <path 
                                d="M10,0 L12,50 L8,100 L14,150 L6,200 L13,250 L7,300 L15,350 L9,400 L11,450 L7,500 L13,550 L9,600 L12,650 L8,700 L10,750 L10,800" 
                                stroke="#000000" 
                                strokeWidth="6" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* Achievement Items */}
                    <div className="space-y-16 md:space-y-32 relative z-10">
                        {achievements.map((achievement, index) => {
                            const isLeft = (achievement.side || (index % 2 === 0 ? 'left' : 'right')) === 'left';
                            return (
                                <motion.div
                                    key={achievement.id || index}
                                    className={`flex items-center justify-center md:justify-start ${
                                        isLeft 
                                            ? 'md:flex-row flex-row' 
                                            : 'md:flex-row-reverse flex-row'
                                    }`}
                                    variants={itemVariants}
                                >
                                    {/* Content Container - Left or Right */}
                                    <div className={`flex-1 ml-16 md:ml-0 md:max-w-md ${
                                        isLeft 
                                            ? 'md:pr-16 md:mr-8 md:text-right' 
                                            : 'md:pl-16 md:ml-8 md:text-left'
                                    }`}>
                                        <motion.div
                                            className="p-6 sm:p-8 bg-white border-4 border-black"
                                            style={{
                                                borderRadius: `${200 + Math.random() * 50}px ${10 + Math.random() * 15}px ${180 + Math.random() * 50}px ${10 + Math.random() * 15}px / ${10 + Math.random() * 15}px ${220 + Math.random() * 50}px ${10 + Math.random() * 15}px ${200 + Math.random() * 50}px`,
                                                boxShadow: '6px 6px 0px 0px #000000'
                                            }}
                                            variants={hoverVariants}
                                            initial="initial"
                                            whileHover="hover"
                                        >
                                            {/* Year Badge */}
                                            {achievement.year && (
                                                <div 
                                                    className="inline-block px-4 py-1 mb-3 bg-black text-white font-bold text-sm"
                                                    style={{ 
                                                        transform: `rotate(${Math.random() * 6 - 3}deg)`
                                                    }}
                                                >
                                                    {achievement.year}
                                                </div>
                                            )}

                                            {/* Title */}
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">
                                                {achievement.title}
                                            </h3>

                                            {/* Description */}
                                            {achievement.description && (
                                                <p className="text-lg sm:text-xl font-bold">
                                                    {achievement.description}
                                                </p>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Node/Blob - Hand-drawn star/ink blob */}
                                    <motion.div 
                                        className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-20"
                                        initial={{ scale: 0, rotate: 0 }}
                                        whileInView={{ 
                                            scale: 1, 
                                            rotate: Math.random() * 360 
                                        }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            delay: index * 0.2,
                                            type: 'spring',
                                            stiffness: 200
                                        }}
                                        whileHover={{ 
                                            scale: 1.3, 
                                            rotate: Math.random() * 720,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        {index % 2 === 0 ? (
                                            // Rough ink blob
                                            <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                <path 
                                                    d="M25,5 C30,8 38,10 42,18 C46,26 45,35 38,40 C31,45 20,45 13,40 C6,35 4,26 8,18 C12,10 20,8 25,5 Z" 
                                                    fill="#000000" 
                                                    stroke="#000000" 
                                                    strokeWidth="2"
                                                />
                                                <circle cx="25" cy="25" r="8" fill="#FFFFFF" />
                                            </svg>
                                        ) : (
                                            // Hand-drawn star
                                            <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                <path 
                                                    d="M25,5 L28,18 L42,18 L32,26 L36,40 L25,32 L14,40 L18,26 L8,18 L22,18 Z" 
                                                    fill="#000000" 
                                                    stroke="#000000" 
                                                    strokeWidth="2" 
                                                    strokeLinejoin="round"
                                                />
                                                <circle cx="25" cy="25" r="5" fill="#FFFFFF" />
                                            </svg>
                                        )}
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Decorative doodles */}
                    <motion.div
                        className="absolute top-10 right-0 hidden lg:block pointer-events-none"
                        initial={{ opacity: 0, rotate: 0 }}
                        whileInView={{ opacity: 0.3, rotate: 15 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M20,40 L60,40 M40,20 L40,60" 
                                stroke="#000000" 
                                strokeWidth="4" 
                                strokeLinecap="round"
                            />
                            <circle cx="40" cy="40" r="25" stroke="#000000" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                        </svg>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-20 left-0 hidden lg:block pointer-events-none"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 0.3, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                            <polygon 
                                points="30,10 50,50 10,50" 
                                stroke="#000000" 
                                strokeWidth="3" 
                                fill="none"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default AchievementsTimeline;
