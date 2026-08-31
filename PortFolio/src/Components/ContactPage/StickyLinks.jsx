import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import axiosClient from '../../api/axiosClient';

const StickyLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchSocials = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await axiosClient.get('/api/v1/socials');
        if (isMounted) {
          setLinks(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load links.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSocials();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    /* Outer tilt — the whole sticky note is rotated slightly */
    <motion.div
      initial={{ rotate: -2, opacity: 0, y: 20 }}
      whileInView={{ rotate: -2, opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 80, damping: 14 }}
      className="relative inline-flex flex-col gap-5 bg-[#fef08a] border-4 border-black px-8 py-8 w-full max-w-xs overflow-hidden"
      style={{
        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
        boxShadow: '8px 8px 0px 0px #000000',
      }}
    >
      {/* Sticky-note top crease line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 opacity-60 rounded-t-[inherit]" />

      {/* Heading */}
      <p
        className="text-xs font-black uppercase tracking-[0.25em] text-black/50 mb-1"
        style={{ fontFamily: "'Permanent Marker', cursive" }}
      >
        Find me here
      </p>

      {/* Links */}
      {loading ? (
        <p className="text-sm font-bold text-black/60 animate-pulse">Loading links...</p>
      ) : error ? (
        <p className="text-xs font-bold text-red-600">{error}</p>
      ) : (
        <ul className="flex flex-col gap-4 list-none m-0 p-0">
          {links.map(({ id, label, href, hoverRotate, hoverScale }, idx) => (
            <li key={id || idx}>
              <motion.a
                href={href}
                target={id !== 'email' ? '_blank' : undefined}
                rel={id !== 'email' ? 'noopener noreferrer' : undefined}
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{
                  rotate: hoverRotate || (idx % 2 === 0 ? -2 : 2),
                  scale: hoverScale || 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 10 },
                }}
                whileTap={{ scale: 0.96 }}
                className={`inline-block font-black text-base md:text-lg text-black underline decoration-dashed decoration-2 underline-offset-4 hover:decoration-solid cursor-pointer ${
                  id === 'email' ? 'break-all' : ''
                }`}
                style={{
                  fontFamily: "'Caveat', 'Permanent Marker', cursive",
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                }}
              >
                {label}
              </motion.a>
            </li>
          ))}
        </ul>
      )}

      {/* Corner doodle star */}
      <svg
        className="absolute -bottom-4 -right-4 w-10 h-10 rotate-12 pointer-events-none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon
          points="25,4 30,18 45,18 33,27 38,42 25,33 12,42 17,27 5,18 20,18"
          stroke="#000"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export default StickyLinks;
