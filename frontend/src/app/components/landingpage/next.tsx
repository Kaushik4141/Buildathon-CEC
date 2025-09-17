'use client'
import { motion } from 'motion/react'
import React from 'react'
import { TextScroll } from "./text-scroll"
import ImageCursorTrail from './image-cursortrail'
const images = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
]


const next = () => {
  return (
    <motion.div className="min-h-screen w-full flex flex-col items-center justify-center relative">
           <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem] "
      text="GTA VI  COMMING SOON  "
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
    <div className="h-screen">
         <ImageCursorTrail
      items={images}
      maxNumberOfImages={5}
      distance={25}
      imgClass="sm:w-40 w-28 sm:h-48 h-36  "
      className=" max-w-4xl rounded-3xl "
    >
      <article className="relative z-50 flex flex-col items-center justify-center ">
        <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight ">
         Vice City, USA.
        </h1>
      </article>
    </ImageCursorTrail>
    </div>
     
    </motion.div>
  )
}

export default next
