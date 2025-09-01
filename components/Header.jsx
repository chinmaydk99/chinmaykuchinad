'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

const Header = ({ isDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/chinmaydk99', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/chinmay-dattanand-kuchinad-a01168171', label: 'LinkedIn' },
    { icon: SiHuggingface, href: 'https://huggingface.co/chinmaydk99', label: 'HuggingFace' },
    { icon: FaEnvelope, href: 'mailto:ckuchina@usc.edu', label: 'Email' }
  ]

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Neural network visualization */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${50 + Math.random() * 20}%`}
              y2={`${50 + Math.random() * 20}%`}
              stroke="url(#gradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Glowing orb behind text */}
        <motion.div
          className="absolute inset-0 mx-auto w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className='mb-6'
        >
          <Image src={assets.profile_img} alt='Chinmay Kuchinad' className='rounded-full w-32 mx-auto border-4 border-purple-400/50'/>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-lg md:text-xl text-purple-400 mb-4 font-mono tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            INCOMING DEEP LEARNING ENGINEER @ AMD
          </motion.h2>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: 0.2 
            }}
          >
            Chinmay Kuchinad
          </motion.h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-20">
            <TypeAnimation
              sequence={[
                'Building Multi-Agent AI Systems',
                2000,
                'Optimizing LLMs with CUDA & Triton',
                2000,
                'Fine-tuning Foundation Models',
                2000,
                'Implementing FlashAttention from Scratch',
                2000,
                'Creating Edge AI Solutions',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono"
            />
          </div>

          <motion.p 
            className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            USC MS in Machine Learning & Data Science | Former Samsung AI Intern | 
            Specializing in GPU optimization, distributed training, and production ML systems
          </motion.p>

          {/* Key highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { label: 'LLM Fine-tuning', value: 'QLoRA, PEFT' },
              { label: 'GPU Computing', value: 'CUDA, Triton' },
              { label: 'Edge AI', value: '60% Model Compression' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20"
                whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-purple-400 text-sm mb-1">{item.label}</div>
                <div className="text-white font-bold">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#work"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/Chinmay_Kuchinad_Resume.pdf"
              download
              className="px-8 py-3 bg-white/10 backdrop-blur-lg text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
                aria-label={link.label}
              >
                <link.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
