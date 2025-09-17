'use client'
import { motion } from 'motion/react'
import React from 'react'
// Update the import path below to the correct location of TextScroll, for example:
import { TextScroll } from "./text-scroll"
// Or create the file at ../components/ui/text-scroll.tsx if it does not exist.

const next = () => {
  return (
    <motion.div className="min-h-screen w-full flex flex-col items-center justify-center relative">
           <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem] "
      text="GTA VI  "
      default_velocity={5}
    />
      <img className='w-20 h-20' src='/re.png' alt="Hero Key Art"/>
      {/* <motion.img 
        className='w-full h-full absolute top-0 right-0 z-[-1] object-cover'
        src='/heroKeyArt logo.webp'
        alt="Hero Key Art"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}/> */}
     
    </motion.div>
  )
}

export default next
