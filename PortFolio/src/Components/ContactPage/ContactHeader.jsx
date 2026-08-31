import { motion } from 'motion/react';

const ContactHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 select-none">
      {/* Slow, continuous oscillating tilt */}
      <motion.div
        animate={{ rotate: [-1, 1, -1] }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="relative inline-block"
      >
        {/* Marker-style h1 */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-black"
          style={{
            fontFamily: "'Permanent Marker', 'Caveat', 'Patrick Hand', cursive",
          }}
        >
          Drop a Line
        </h1>

        {/* Chaotic hand-drawn SVG scribble underline */}
        <svg
          viewBox="0 0 420 28"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full mt-1"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Main messy scribble stroke */}
          <path
            d="M4,18 C18,6 30,22 48,14 C64,7 72,24 90,12
               C108,2 118,20 136,16 C154,11 160,25 178,13
               C196,2 210,21 228,15 C246,9 255,23 274,11
               C292,1 305,22 322,14 C338,7 350,24 368,13
               C382,5 395,20 416,16"
            stroke="#000"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Second overlapping wobbly stroke for extra chaos */}
          <path
            d="M2,22 C20,14 35,26 55,18 C75,10 85,27 104,19
               C122,12 130,26 150,18 C170,10 182,24 200,20
               C218,15 228,27 248,17 C268,8 280,25 298,18
               C316,12 330,26 348,17 C365,9 382,24 418,20"
            stroke="#000"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.55"
          />
          {/* Stray scratch mark — upper loop for messiness */}
          <path
            d="M60,8 C80,2 100,10 120,6 C140,2 155,9 175,5"
            stroke="#000"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.35"
          />
          {/* Trailing scrawl on the right end */}
          <path
            d="M370,10 C388,6 404,14 418,9"
            stroke="#000"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default ContactHeader;
