import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import axiosClient from '../api/axiosClient';
import AchievementHeader from '../Components/AchievementPage/AchievementHeader';
import AchievementCard from '../Components/AchievementPage/AchievementCard';
import Footer from '../Components/Footer';

const Achievement = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await axiosClient.get('/api/v1/achievements');
        if (isMounted) {
          setAchievements(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load achievements.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchAchievements();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen w-full filter-sketchy-light bg-white border-8 pt-24 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Background Doodles */}
      <div
        className="absolute top-32 left-8 w-16 h-16 hidden lg:block pointer-events-none"
        style={{ opacity: 0.25 }}
      >
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

      <div
        className="absolute top-1/3 right-12 w-14 h-14 hidden lg:block pointer-events-none"
        style={{ opacity: 0.3 }}
      >
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="18" stroke="#000000" strokeWidth="2.5" fill="none" />
          <circle cx="25" cy="25" r="10" stroke="#000000" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div
        className="absolute bottom-1/4 left-16 w-12 h-12 hidden md:block pointer-events-none"
        style={{ opacity: 0.28 }}
      >
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5,25 L45,25 M25,5 L25,45 M15,15 L35,35 M35,15 L15,35"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Header */}
      <AchievementHeader />

      {/* Loading and Error States */}
      {loading ? (
        <div className="w-full flex items-center justify-center py-20">
          <p className="text-2xl sm:text-3xl font-black text-black tracking-widest animate-pulse">
            LOADING BRAG SHEET...
          </p>
        </div>
      ) : error ? (
        <div
          className="w-full max-w-lg mx-auto p-6 my-12 border-4 border-black bg-red-100 text-center"
          style={{
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            boxShadow: '6px 6px 0px 0px #000000',
          }}
        >
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
        /* Grid Container matching WorkPage */
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {achievements.map((item, index) => (
              <motion.div
                key={item.id || index}
                className="relative"
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: index % 3 === 0 ? -2 : index % 3 === 1 ? 1 : -1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1,
                }}
              >
                {/* Duct Tape Effect - Top */}
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-black z-10"
                  style={{
                    borderRadius: '3px',
                    boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    opacity: 0.8,
                  }}
                />

                {/* Duct Tape Effect - Bottom (alternate) */}
                {index % 2 === 0 && (
                  <div
                    className="absolute -bottom-4 right-4 w-16 h-8 bg-black z-10 rotate-12"
                    style={{
                      borderRadius: '3px',
                      boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      opacity: 0.8,
                    }}
                  />
                )}

                {/* Achievement Card */}
                <AchievementCard
                  title={item.title}
                  name={item.name}
                  description={item.description}
                  content={item.content}
                  links={item.links}
                />

                {/* Corner Pin / Thumbtack */}
                <div
                  className="absolute top-2 right-2 w-3 h-3 bg-red-600 rounded-full border-2 border-black z-20"
                  style={{ boxShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                />
              </motion.div>
            ))}
          </div>

          {/* The Stats Section */}
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
                boxShadow: '8px 8px 0px 0px #000000',
              }}
            >
              {/* Duct Tape Top */}
              <div
                className="absolute -top-4 left-1/4 w-24 h-8 bg-black"
                style={{
                  borderRadius: '3px',
                  opacity: 0.8,
                }}
              />
              <div
                className="absolute -top-4 right-1/4 w-24 h-8 bg-black"
                style={{
                  borderRadius: '3px',
                  opacity: 0.8,
                }}
              />

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 underline decoration-4">
                HIGHLIGHTS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div
                  className="p-4 border-4 border-black bg-yellow-100"
                  style={{ borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px' }}
                >
                  <p className="text-2xl sm:text-3xl font-black mb-2">⚡ Competitive</p>
                  <p className="text-xl sm:text-2xl font-bold">1138 Max Rating</p>
                  <p className="text-lg">150+ Problems Solved</p>
                </div>

                <div
                  className="p-4 border-4 border-black bg-green-100"
                  style={{ borderRadius: '50px 10px 50px 10px / 10px 50px 10px 50px' }}
                >
                  <p className="text-2xl sm:text-3xl font-black mb-2">🏆 Hackathons</p>
                  <p className="text-xl sm:text-2xl font-bold">Biothon & SFOC Finalist</p>
                  <p className="text-lg">Top 1-2% Nationally</p>
                </div>
              </div>

              {/* Jagged star badge decoration */}
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
      )}

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Achievement;
