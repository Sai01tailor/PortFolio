import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import axiosClient from '../../api/axiosClient';

const SkillsSection = () => {
    const [skillClusters, setSkillClusters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchSkills = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await axiosClient.get('/api/v1/skills');
                if (isMounted) {
                    setSkillClusters(Array.isArray(data) ? data : []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Failed to load skills.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchSkills();

        return () => {
            isMounted = false;
        };
    }, []);

    const stickyNoteVariants = {
        initial: (rotation) => ({ 
            rotate: rotation || 0,
            scale: 1 
        }),
        hover: (rotation) => ({
            rotate: (rotation || 0) + (Math.random() * 4 - 2),
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="w-full px-6 sm:px-12 md:px-20 py-12 md:py-16">
            {/* Section Title */}
            <motion.h2 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-12 sm:mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                SKILLS
            </motion.h2>

            {loading ? (
                <div className="py-20 text-center">
                    <p className="text-2xl font-black tracking-widest animate-pulse">
                        LOADING SKILLS...
                    </p>
                </div>
            ) : error ? (
                <div className="p-4 border-2 border-red-500 bg-red-50 text-red-700 font-bold rounded text-center">
                    {error}
                </div>
            ) : (
                <>
                    {/* ========================================================================= */}
                    {/* DESKTOP VIEW (≥ md) — PERFECTLY ALIGNED SYMMETRICAL MIND MAP              */}
                    {/* ========================================================================= */}
                    <div className="hidden md:block relative w-full min-h-[500px] lg:min-h-[520px] bg-white border-8 border-black mb-16 overflow-hidden">
                        {/* Connection Lines - Hand-drawn SVG style with exact symmetrical endpoints */}
                        <svg 
                            className="absolute inset-0 w-full h-full pointer-events-none" 
                            viewBox="0 0 1000 500"
                            preserveAspectRatio="none"
                            style={{ zIndex: 0 }}
                        >
                            {/* Line from Core (top-left) to Web (top-right) */}
                            <path
                                d="M 280 160 Q 500 120 720 160"
                                stroke="#000000"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray="6,6"
                                opacity="0.35"
                            />
                            {/* Line from Core (top-left) to AI/Vision (bottom-center) */}
                            <path
                                d="M 240 230 Q 340 330 420 370"
                                stroke="#000000"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray="6,6"
                                opacity="0.35"
                            />
                            {/* Line from Web (top-right) to AI/Vision (bottom-center) */}
                            <path
                                d="M 760 230 Q 660 330 580 370"
                                stroke="#000000"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray="6,6"
                                opacity="0.35"
                            />
                        </svg>

                        {/* Scattered Sticky Note Clusters with Symmetrical Alignment */}
                        {skillClusters.map((cluster, clusterIndex) => {
                            // Perfect symmetrical placement:
                            // Index 0 (Core): Top Left
                            // Index 1 (Web): Top Right
                            // Index 2 (AI/Vision): Bottom Exact Center (transform: translateX(-50%))
                            let desktopStyle = { zIndex: 10 };
                            let rotation = cluster.rotation !== undefined ? cluster.rotation : 0;

                            if (clusterIndex === 0) {
                                desktopStyle = { ...desktopStyle, top: '10%', left: '10%' };
                                rotation = -3;
                            } else if (clusterIndex === 1) {
                                desktopStyle = { ...desktopStyle, top: '10%', right: '10%' };
                                rotation = 2;
                            } else {
                                desktopStyle = { ...desktopStyle, bottom: '8%', left: '50%', transform: 'translateX(-50%)' };
                                rotation = -1.5;
                            }

                            return (
                                <motion.div
                                    key={clusterIndex}
                                    className="absolute"
                                    style={desktopStyle}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: clusterIndex * 0.15,
                                        type: 'spring',
                                        stiffness: 200
                                    }}
                                >
                                    <motion.div
                                        className="p-6 sm:p-8 bg-white border-4 border-black cursor-pointer"
                                        style={{
                                            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                            boxShadow: '6px 6px 0px 0px #000000',
                                            backgroundColor: cluster.color || '#FFFFFF',
                                            minWidth: '200px',
                                            maxWidth: '260px'
                                        }}
                                        custom={rotation}
                                        variants={stickyNoteVariants}
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        {/* Cluster Title */}
                                        <h3 className="text-2xl sm:text-3xl font-black mb-3 underline decoration-4">
                                            {cluster.title}
                                        </h3>

                                        {/* Skills List */}
                                        <ul className="space-y-1.5">
                                            {(cluster.skills || []).map((skill, skillIndex) => (
                                                <motion.li
                                                    key={skillIndex}
                                                    className="text-lg sm:text-xl font-bold flex items-center"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ 
                                                        duration: 0.3, 
                                                        delay: clusterIndex * 0.15 + skillIndex * 0.08 
                                                    }}
                                                >
                                                    <span className="mr-2 text-2xl">•</span>
                                                    {skill}
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* Hand-drawn pin/tack decoration */}
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <svg width="22" height="22" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="8" fill="#FF0000" stroke="#000000" strokeWidth="2"/>
                                                <circle cx="10" cy="10" r="3" fill="#000000"/>
                                            </svg>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* Balanced scattered decorative doodles */}
                        <motion.div
                            className="absolute pointer-events-none"
                            style={{ top: '48%', left: '8%' }}
                            initial={{ opacity: 0, rotate: 0 }}
                            whileInView={{ opacity: 0.25, rotate: 15 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <svg width="50" height="50" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M10,30 L50,30 M30,10 L30,50 M15,15 L45,45 M45,15 L15,45" 
                                    stroke="#000000" 
                                    strokeWidth="3" 
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>

                        <motion.div
                            className="absolute pointer-events-none"
                            style={{ top: '48%', right: '8%' }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 0.25, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <svg width="45" height="45" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                <circle 
                                    cx="25" 
                                    cy="25" 
                                    r="18" 
                                    stroke="#000000" 
                                    strokeWidth="2.5" 
                                    fill="none" 
                                    strokeDasharray="3,3"
                                />
                            </svg>
                        </motion.div>
                    </div>

                    {/* ========================================================================= */}
                    {/* MOBILE VIEW (< md) — CLEAN INDEPENDENT VERTICAL STAGGERED STACK          */}
                    {/* ========================================================================= */}
                    <div className="block md:hidden w-full bg-white border-8 border-black p-6 mb-16 relative">
                        <div className="flex flex-col items-center gap-10 py-4">
                            {skillClusters.map((cluster, index) => {
                                const mobileRotation = index === 0 ? -2 : index === 1 ? 1.5 : -1.5;
                                return (
                                    <motion.div
                                        key={index}
                                        className="relative w-full max-w-[280px]"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.4, 
                                            delay: index * 0.15,
                                            type: 'spring',
                                            stiffness: 150
                                        }}
                                    >
                                        <div
                                            className="p-6 bg-white border-4 border-black cursor-pointer w-full relative"
                                            style={{
                                                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                                boxShadow: '6px 6px 0px 0px #000000',
                                                backgroundColor: cluster.color || '#FFFFFF',
                                                transform: `rotate(${mobileRotation}deg)`
                                            }}
                                        >
                                            {/* Cluster Title */}
                                            <h3 className="text-2xl font-black mb-3 underline decoration-4">
                                                {cluster.title}
                                            </h3>

                                            {/* Skills List */}
                                            <ul className="space-y-2">
                                                {(cluster.skills || []).map((skill, skillIndex) => (
                                                    <li
                                                        key={skillIndex}
                                                        className="text-lg font-bold flex items-center"
                                                    >
                                                        <span className="mr-2 text-xl">•</span>
                                                        {skill}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Red Thumbtack Pin */}
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="8" fill="#FF0000" stroke="#000000" strokeWidth="2"/>
                                                    <circle cx="10" cy="10" r="3" fill="#000000"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Mobile decorative corner doodle */}
                        <div className="absolute bottom-3 right-3 opacity-20 pointer-events-none">
                            <svg width="40" height="40" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="18" stroke="#000000" strokeWidth="2.5" fill="none" strokeDasharray="3,3"/>
                            </svg>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SkillsSection;
