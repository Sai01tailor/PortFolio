import React, { useState, useEffect } from "react";
import { motion } from 'motion/react';
import axiosClient from "../../api/axiosClient";
import TextType from "../TextType";
import { Link } from "react-router-dom";

const ProjectItem = ({ name, link, image, description }) => {
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
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            variants={buttonVariants}
            whileHover="hover"
            className='filter-sketchy-paper rounded p-4 border-3 bg-white cursor-pointer w-full'
        >
            <img src={image} alt={name} className="h-[150px] sm:h-[180px] md:h-[200px] w-full rounded object-cover mb-3"/>
            <h1 className="font-bold underline text-lg sm:text-xl md:text-2xl mb-2">{name}</h1>
            <p className="text-sm sm:text-base mb-3">{description}</p>
            {link?.startsWith('http') ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="border-4 bg-[#1a1a1a] text-white rounded w-full font-bold py-2 hover:bg-white hover:text-[#1a1a1a] transition-colors cursor-pointer text-sm sm:text-base">
                        See Full
                    </button>
                </a>
            ) : (
                <Link to={link || '/works'}>
                    <button className="border-4 bg-[#1a1a1a] text-white rounded w-full font-bold py-2 hover:bg-white hover:text-[#1a1a1a] transition-colors cursor-pointer text-sm sm:text-base">
                        See Full
                    </button>
                </Link>
            )}
        </motion.div>
    );
};

const Project = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchFeatured = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await axiosClient.get('/api/v1/projects/featured');
                if (isMounted) {
                    setFeaturedProjects(Array.isArray(data) ? data : []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Failed to load featured projects.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchFeatured();

        return () => {
            isMounted = false;
        };
    }, []);

    return (       
        <motion.div className='m-0 p-0 min-h-screen w-full filter-sketchy-light bg-white border-8 flex flex-col items-center justify-center py-12 px-4 sm:px-6 relative'>
            {/* Random Doodle 1 - Top Left */}
            <div className="absolute top-12 left-16 w-16 h-16 hidden lg:block pointer-events-none" style={{ opacity: 0.25 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <rect 
                        x="5" 
                        y="5" 
                        width="40" 
                        height="40" 
                        stroke="#000000" 
                        strokeWidth="2.5" 
                        fill="none"
                    />
                    <line x1="5" y1="5" x2="45" y2="45" stroke="#000000" strokeWidth="2.5"/>
                    <line x1="45" y1="5" x2="5" y2="45" stroke="#000000" strokeWidth="2.5"/>
                </svg>
            </div>

            {/* Random Doodle 2 - Top Right */}
            <div className="absolute top-20 right-12 w-14 h-14 hidden lg:block pointer-events-none" style={{ opacity: 0.45 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M25,5 L5,45 L45,45 Z" 
                        stroke="#000000" 
                        strokeWidth="2.5" 
                        fill="none"
                    />
                    <circle cx="25" cy="30" r="6" stroke="#000000" strokeWidth="2" fill="none"/>
                </svg>
            </div>

            {/* Random Doodle 3 - Bottom Left */}
            <div className="absolute bottom-16 left-24 w-12 h-12 hidden md:block pointer-events-none" style={{ opacity: 0.38 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M10,25 Q20,10 30,25 Q40,40 10,25" 
                        stroke="#000000" 
                        strokeWidth="2.5" 
                        fill="none"
                    />
                </svg>
            </div>

            {/* Random Doodle 4 - Bottom Right */}
            <div className="absolute bottom-24 right-16 w-16 h-16 hidden md:block pointer-events-none" style={{ opacity: 0.32 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="18" stroke="#000000" strokeWidth="2.5" fill="none"/>
                    <circle cx="25" cy="25" r="12" stroke="#000000" strokeWidth="2" fill="none"/>
                    <circle cx="25" cy="25" r="6" stroke="#000000" strokeWidth="2" fill="#000000"/>
                </svg>
            </div>

            {/* Random Doodle 5 - Middle Right */}
            <div className="absolute top-1/3 right-8 w-10 h-10 hidden lg:block pointer-events-none" style={{ opacity: 0.42 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <polygon 
                        points="25,10 40,25 25,40 10,25" 
                        stroke="#000000" 
                        strokeWidth="2.5" 
                        fill="none"
                    />
                </svg>
            </div>
            
            {/* Title */}
            <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-x-2">
                <TextType className='text-3xl sm:text-4xl md:text-5xl underline font-bold text-white [text-stroke:2px_black] [-webkit-text-stroke:2px_black]' text={'Featured'} cursorCharacter='' initialDelay={700}/>
                <TextType className='text-3xl sm:text-4xl md:text-5xl font-bold' text={' Project'} cursorCharacter='' initialDelay={900}/>
            </div>

            {/* Projects Grid: 1 col on mobile, 2 on sm, 3 on lg */}
            {loading ? (
                <div className="py-16 text-center">
                    <p className="text-xl sm:text-2xl font-bold tracking-widest animate-pulse">
                        LOADING FEATURED PROJECTS...
                    </p>
                </div>
            ) : error ? (
                <div className="p-4 border-2 border-red-500 bg-red-50 text-red-700 font-bold rounded mb-6 text-center">
                    {error}
                </div>
            ) : (
                <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
                    {featuredProjects.map((item) => (
                        <ProjectItem 
                            key={item.id || item.name}
                            name={item.name}
                            link={item.link}
                            image={item.image}
                            description={item.description}
                        />
                    ))}
                </div>
            )}

            <Link to='/works' className="mt-8 text-base sm:text-lg md:text-xl font-bold hover:underline border-2 border-black px-4 sm:px-6 py-2 sm:py-3 bg-white" style={{ borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px' }}>
                See More ----&gt;
            </Link>
        </motion.div>
    );
};

export default Project;