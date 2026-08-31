import React, { useRef } from 'react'
import { motion, useMotionValue, animate, useInView } from "motion/react"
import { useNavigate } from 'react-router-dom';
import { useMenu } from './MenuProvider';

const Variants = {
  initial: {
    width: 0,
    height: 0
  },
  animate: {
    width: '60vw',
    height: '8vh',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 2
    }
  },
  hover: {
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  }
};

const navs = ['Home', 'About Me', 'Works', 'Achievement', 'Contact']

const NavsItem = () => {
    const containerRef = useRef(null)
    const navItemRef = useRef(null)
    const xVal = useMotionValue(0)
    const navigate = useNavigate()
    const isDragging = useRef(false)
    
    const overlappedItem = () => {
        if (!containerRef.current || !navItemRef.current) return 0
        
        const containerRect = containerRef.current.getBoundingClientRect()
        const itemWidth = navItemRef.current.offsetWidth
        const currentX = xVal.get()
        
        const sectionWidth = containerRect.width / navs.length
        const itemCenter = currentX + (itemWidth / 2)
        const itemIndex = Math.floor(itemCenter / sectionWidth)
        
        return Math.max(0, Math.min(itemIndex, navs.length - 1))
    }
    
    // Handle navigation after drag ends
    const handleDragEnd = () => {
        isDragging.current = false
        const itemIndex = overlappedItem()
        const route = navs[itemIndex].toLowerCase().replace(/\s+/g, '-')
        
        if (route === 'home') {
            navigate('/')
        } else {
            navigate(`/${route}`)
        }
    }
    
    // Handle click/touch to smoothly move to that position
    const handleContainerClick = (e) => {
        // Prevent drag from interfering
        if (e.target.closest('.draggable-item')) return
        
        if (!containerRef.current || !navItemRef.current) return
        
        const containerRect = containerRef.current.getBoundingClientRect()
        const itemWidth = navItemRef.current.offsetWidth
        const clickX = e.clientX - containerRect.left
        
        const targetX = clickX - (itemWidth / 2)
        
        const maxX = containerRect.width - itemWidth
        const constrainedX = Math.max(0, Math.min(targetX, maxX))
        
        // Animate to the target position smoothly
        animate(xVal, constrainedX, {
            type: 'spring',
            stiffness: 300,
            damping: 30
        }).then(() => {
            // Navigate after animation completes
            const itemIndex = overlappedItem()
            const route = navs[itemIndex].toLowerCase().replace(/\s+/g, '-')
            
            if (route === 'home') {
                navigate('/')
            } else {
                navigate(`/${route}`)
            }
        })
    }
    
    return (
        <div 
            ref={containerRef}
            onClick={handleContainerClick}
            className='relative w-full h-full flex items-center justify-around cursor-pointer px-4'
        >
            {navs.map((nav, index) => (
                <span key={index} className='z-1000 font-semibold text-gray-700 relative pointer-events-none select-none'>
                    {nav}
                </span>
            ))}
            <motion.div
                ref={navItemRef}
                drag='x'
                dragConstraints={containerRef}
                dragElastic={0}
                dragMomentum={false}
                onDragStart={() => isDragging.current = true}
                onDragEnd={handleDragEnd}
                style={{ x: xVal }}
                className='draggable-item bg-gray-300 w-[20%] h-[110%] absolute left-0 top-0 z-999 rounded-3xl border-solid border-black border-2 shadow-md cursor-grab active:cursor-grabbing'
                whileDrag={{ cursor: 'grabbing' }}
            />
        </div>
    )
}

// ─── Mobile hamburger button ───────────────────────────────────────────────────
const MobileHamburger = () => {
    const { menuStatus, setMenuStatus } = useMenu()

    return (
        <motion.button
            className="md:hidden fixed top-[1.5vh] left-4 z-[99999] w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-md font-bold text-2xl cursor-pointer"
            style={{ boxShadow: '3px 3px 0px 0px #000000' }}
            onClick={() => setMenuStatus(!menuStatus)}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle menu"
        >
            {menuStatus ? '×' : '≡'}
        </motion.button>
    )
}

const Header = () => {
    const headerRef = useRef(null)
    const isInView = useInView(headerRef, { 
        once: true,
        amount: 0.3
    })

    return (
        <>
            {/* Desktop pill nav — hidden on mobile */}
            <div ref={headerRef} className='hidden md:flex w-[100vw] z-[9999] h-[10vh] fixed top-0 items-center justify-center'>
                <motion.div 
                    variants={Variants}
                    initial='initial'
                    animate={isInView ? 'animate' : 'initial'}
                    whileHover='hover'
                    className='bg-gray-100 rounded-3xl border-solid border-black border-3 shadow-xl flex items-center justify-center relative overflow-hidden'
                >
                    <NavsItem/>
                </motion.div>
            </div>

            {/* Mobile hamburger button — hidden on desktop */}
            <MobileHamburger />
        </>
    )
}

export default Header;

