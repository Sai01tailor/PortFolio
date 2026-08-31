import React, { useState, useEffect } from "react";
import { motion } from 'motion/react';
import axiosClient from "../../api/axiosClient";
import TextType from "../TextType";

function FlipCard({ name, type }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

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
      className="w-full h-24 md:h-32 cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setIsFlipped(!isFlipped)}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="relative w-full h-full duration-500"
        style={{ transformStyle: "preserve-3d" }}
        variants={cardVariants}
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* FRONT SIDE */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          style={{ backfaceVisibility: 'hidden' }}
          className='filter-sketchy-paper absolute inset-0 rounded p-4 border-3 bg-white flex items-center justify-center text-center font-bold text-xl'>
          {name}
        </motion.div>

        {/* BACK SIDE */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
          className='filter-sketchy-paper absolute inset-0 rounded p-4 border-3 bg-gray-500 flex items-center justify-center text-center font-bold text-xl text-white'>
          {type}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const TechStack = () => {
  const [techList, setTechList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchTechStack = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await axiosClient.get('/api/v1/tech-stack');
        if (isMounted) {
          setTechList(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load tech stack.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTechStack();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.div className='m-0 p-0 min-h-[80vh] w-full filter-sketchy-light bg-white border-t-8 border-l-8 border-r-8 flex flex-col items-center justify-start md:justify-center relative'>
      {/* Mobile title — in normal flow at top */}
      <div className="block md:hidden flex items-center pt-8 pb-4">
        <TextType className='text-4xl underline font-bold text-white [text-stroke:2px_black] [-webkit-text-stroke:2px_black]' text={'Tech'} cursorCharacter='' initialDelay={700} />
        <TextType className='text-4xl font-bold' text={' Stack'} cursorCharacter='' initialDelay={900} />
      </div>

      {/* Desktop title — absolutely centered overlay */}
      <div className="hidden md:flex absolute z-10 items-center pointer-events-none">
        <TextType className='text-6xl underline font-bold text-white [text-stroke:2px_black] [-webkit-text-stroke:2px_black]' text={'Tech'} cursorCharacter='' initialDelay={700} />
        <TextType className='text-6xl font-bold' text={' Stack'} cursorCharacter='' initialDelay={900} />
      </div>

      {/* Cards Grid — 2 cols on mobile, 4 cols on desktop */}
      {loading ? (
        <div className="py-20 text-center">
          <p className="text-xl font-bold tracking-widest animate-pulse">
            LOADING TECH STACK...
          </p>
        </div>
      ) : error ? (
        <div className="p-4 border-2 border-red-500 bg-red-50 text-red-700 font-bold rounded my-8 text-center">
          {error}
        </div>
      ) : (
        <div className="w-[90%] md:w-[80%] h-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-6 md:p-8">
          {techList.map((tech, index) => (
            <React.Fragment key={index}>
              <FlipCard name={tech.name} type={tech.type} />
              {/* Desktop only: leave (2,2) and (2,3) empty in the 4-col grid */}
              {index === 4 && (
                <>
                  <div className="hidden md:block" />
                  <div className="hidden md:block" />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TechStack;