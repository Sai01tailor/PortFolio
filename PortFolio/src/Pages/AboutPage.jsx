import React from 'react';
import { motion } from 'motion/react';
import AboutHeader from '../Components/AboutPage/AboutHeader';
import BiographySection from '../Components/AboutPage/BiographySection';
import SkillsSection from '../Components/AboutPage/SkillsSection';
import AchievementsTimeline from '../Components/AboutPage/AchievementsTimeline';
import Footer from '../Components/Footer';

const AboutPage = () => {
    return (
        <>
            {/* About Page Content */}
            <motion.div 
                className='min-h-screen w-full filter-sketchy-light bg-white flex flex-col items-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header with "WHO AM I?" - Oscillating animation */}
                <AboutHeader />

                {/* Biography Section - Brutalist container with punchy text and hand-drawn shadow */}
                <BiographySection />

                {/* Skills Section - Scattered sticky notes mind map */}
                <SkillsSection />

                {/* Achievements Timeline - Jagged vertical line with hand-drawn nodes */}
                <AchievementsTimeline />
            </motion.div>

            <Footer />
        </>
    );
};

export default AboutPage;
