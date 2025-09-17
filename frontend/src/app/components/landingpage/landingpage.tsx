'use client'
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  return (
    <div>
    <motion.div
      style={{
        scale,
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img 
        className='w-full h-full object-cover' 
        src='/hmm.png' 
        alt="Hero Key Art"
      />
      <img 
        className='w-full h-full absolute top-0 right-0 object-cover' 
        src='/heroKeyArt logo.webp' 
        alt="Hero Key Art"
      />
    </motion.div>

    </div>
  )
}

export default LandingPage
