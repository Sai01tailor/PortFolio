import { motion } from 'motion/react';

const AchievementHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 select-none">
      {/* Slow infinite oscillation between -1deg and 1deg */}
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
        {/* Heavy marker-style h1 */}
        <h1
          className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none text-black"
          style={{
            fontFamily: "'Permanent Marker', 'Caveat', 'Patrick Hand', cursive",
          }}
        >
          The Brag Sheet
        </h1>

        {/* Jagged SVG scribble underline */}
        <svg
          viewBox="0 0 520 32"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full mt-2"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Primary jagged stroke — sharp zigzag feel */}
          <path
            d="M2,22 L18,8 L34,24 L50,6 L66,22 L82,10 L98,26
               L114,8 L130,22 L146,6 L162,24 L178,10 L194,26
               L210,8 L226,22 L242,6 L258,24 L274,10 L290,26
               L306,8 L322,22 L338,6 L354,24 L370,10 L386,26
               L402,8 L418,22 L434,6 L450,24 L466,10 L482,26
               L498,12 L516,20"
            stroke="#000"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Second softer pass — offset slightly for layered mess */}
          <path
            d="M4,26 L20,14 L36,28 L52,12 L68,26 L84,14 L100,28
               L116,12 L132,26 L148,12 L164,28 L180,14 L196,28
               L212,12 L228,26 L244,12 L260,28 L276,14 L292,28
               L308,12 L324,26 L340,12 L356,28 L372,14 L388,28
               L404,12 L420,26 L436,12 L452,28 L468,14 L484,28
               L500,16 L518,24"
            stroke="#000"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
          {/* Stray scratch above — adds sketchbook chaos */}
          <path
            d="M80,4 L96,10 L112,3 L128,9 L144,3"
            stroke="#000"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.25"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default AchievementHeader;
