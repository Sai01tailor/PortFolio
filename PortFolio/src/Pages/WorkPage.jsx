import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import axiosClient from '../api/axiosClient';
import WorkHeader from '../Components/WorkPage/WorkHeader';
import Grid from '../Components/WorkPage/Grid';
import Footer from '../Components/Footer';

const WorkPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchProjects = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await axiosClient.get('/api/v1/projects');
                if (isMounted) {
                    setProjects(Array.isArray(data) ? data : []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Failed to load projects.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchProjects();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <motion.div 
            className='min-h-screen w-full filter-sketchy-light bg-white border-8 pt-24 relative'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Random decorative doodles */}
            <div className="absolute top-32 left-8 w-16 h-16 hidden lg:block pointer-events-none" style={{ opacity: 0.25 }}>
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

            <div className="absolute top-1/3 right-12 w-14 h-14 hidden lg:block pointer-events-none" style={{ opacity: 0.3 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="18" stroke="#000000" strokeWidth="2.5" fill="none"/>
                    <circle cx="25" cy="25" r="10" stroke="#000000" strokeWidth="2" fill="none"/>
                </svg>
            </div>

            <div className="absolute bottom-1/4 left-16 w-12 h-12 hidden md:block pointer-events-none" style={{ opacity: 0.28 }}>
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M5,25 L45,25 M25,5 L25,45 M15,15 L35,35 M35,15 L15,35" 
                        stroke="#000000" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Work Header */}
            <WorkHeader />

            {/* Content Loading & Error States */}
            {loading ? (
                <div className="w-full flex items-center justify-center py-20">
                    <p className="text-2xl sm:text-3xl font-black text-black tracking-widest animate-pulse">
                        LOADING PROJECTS...
                    </p>
                </div>
            ) : error ? (
                <div className="w-full max-w-lg mx-auto p-6 my-12 border-4 border-black bg-red-100 text-center" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', boxShadow: '6px 6px 0px 0px #000000' }}>
                    <p className="text-xl font-bold text-red-700 mb-2">Oops! Something broke.</p>
                    <p className="text-sm font-semibold text-black mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-black text-white font-bold text-sm border-2 border-black hover:bg-white hover:text-black transition-colors"
                        style={{ borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px' }}
                    >
                        Retry
                    </button>
                </div>
            ) : (
                <Grid projects={projects} />
            )}

            {/* Footer */}
            <Footer />
        </motion.div>
    );
};

export default WorkPage;
