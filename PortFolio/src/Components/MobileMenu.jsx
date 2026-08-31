import React, { useState } from "react"
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  useSpring,
  AnimatePresence,
} from "motion/react"
import { Link } from "react-router-dom"
import { createPortal } from "react-dom"
import { useMenu } from "./MenuProvider"

const menuItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Me", path: "/about-me" },
  { id: 3, title: "Works", path: "/works" },
  { id: 4, title: "Achievement", path: "/achievement" },
  { id: 5, title: "Contact", path: "/contact" },
]

// ─── Animation variants ────────────────────────────────────────────────────────
const panelVariants = {
  open: { x: "0%", transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } },
  closed: { x: "100%", transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
}

const containerVariants = {
  open: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const itemVariants = {
  open: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  closed: { y: 60, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
}

// ─── Single menu item row ──────────────────────────────────────────────────────
const MenuItem = ({ title, path, onClose }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      className="relative w-full border-b-2 border-black/10 flex-1 flex items-center justify-center overflow-hidden"
      animate={{ backgroundColor: hovered ? "#1a1a1a" : "rgba(0,0,0,0)" }}
      transition={{ duration: 0.25 }}
    >
      <Link
        to={path}
        onClick={onClose}
        className="w-full h-full flex items-center justify-center px-4"
      >
        <motion.h2
          // clamp font size: large enough to be bold, small enough to never overflow
          className="font-black uppercase tracking-tight text-center"
          style={{ fontSize: "clamp(1.8rem, 8vw, 4rem)", lineHeight: 1.1 }}
          animate={{ color: hovered ? "#f5f0e8" : "#1a1a1a" }}
          transition={{ duration: 0.25 }}
        >
          {title}
        </motion.h2>
      </Link>
    </motion.div>
  )
}

// ─── Backdrop (dark overlay behind panel) ─────────────────────────────────────
const Backdrop = ({ onClick }) => (
  <motion.div
    className="fixed inset-0 bg-black/40 z-[99989]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35 }}
    onClick={onClick}
  />
)

// ─── Main mobile menu ─────────────────────────────────────────────────────────
const MobileMenu = () => {
  const { menuStatus, setMenuStatus } = useMenu()
  const close = () => setMenuStatus(false)

  if (typeof document === "undefined") return null

  return createPortal(
    <>
      {/* Backdrop — tap outside to close */}
      <AnimatePresence>
        {menuStatus && <Backdrop key="backdrop" onClick={close} />}
      </AnimatePresence>

      {/* Sliding full-screen panel */}
      <motion.div
        className="fixed inset-0 z-[99990] bg-[#f0ece4] text-[#1a1a1a] flex flex-col overflow-hidden"
        variants={panelVariants}
        initial="closed"
        animate={menuStatus ? "open" : "closed"}
        // Prevent pointer events from leaking when fully closed
        style={{ pointerEvents: menuStatus ? "auto" : "none" }}
      >
        {/* Close button — top right */}
        {/* <div className="flex items-center justify-between px-6 py-5 flex-shrink-0 border-b-2 border-black/10">
          
          <motion.button
            onClick={close}
            className="w-11 h-11 border-2 border-black rounded-full flex items-center justify-center font-bold text-xl cursor-pointer bg-white"
            style={{ boxShadow: "3px 3px 0px 0px #000" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close menu"
          >
            ×
          </motion.button>
        </div> */}

        {/* Nav items — fill remaining height, no scroll needed */}
        <motion.div
          className="flex flex-col flex-1 overflow-hidden"
          variants={containerVariants}
          initial="closed"
          animate={menuStatus ? "open" : "closed"}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.id} title={item.title} path={item.path} onClose={close} />
          ))}
        </motion.div>

        {/* Footer hint */}
        <p className="text-center text-xs text-black/30 pb-4 flex-shrink-0 font-semibold tracking-widest uppercase">
          Swipe right or tap × to close
        </p>
      </motion.div>
    </>,
    document.body
  )
}

export default MobileMenu
