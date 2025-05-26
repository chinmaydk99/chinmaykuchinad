import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Chinmay Kuchinad <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
      
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      className='mb-4'
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </motion.div>
    <motion.h1 
    initial={{y: -30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay: 0.5}}
    className='text-2xl sm:text-5xl lg:text-[66px] font-Ovo'>
        ML Engineer & AI Researcher</motion.h1>

        <motion.div
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='flex flex-wrap items-center justify-center gap-4 mt-4 mb-6'>
          <span className='px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-semibold'>
            Los Angeles, CA
          </span>
        </motion.div>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-Ovo'>
        USC Graduate specializing in Agentic AI, LLM Optimization, and GPU Programming. Building intelligent multi-agent systems and optimizing ML inference for production.
        </motion.p>



        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>

            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            href="/Chinmay_Kuchinad_Resume.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                My Resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
                
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.4}}
            href="https://huggingface.co/chinmaydk99" target="_blank" rel="noopener noreferrer"
            className='px-10 py-3 border rounded-full border-orange-500 flex items-center gap-2 bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors duration-300 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-400'>
                <Image src={assets.huggingface_logo} alt='Hugging Face' className='w-5 h-5'/>
                🤗 HuggingFace</motion.a>
        </div>
    </div>
  )
}

export default Header
