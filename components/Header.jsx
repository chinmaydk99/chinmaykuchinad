'use client'
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'
import { HiDownload } from 'react-icons/hi'

const Header = ({ isDarkMode }) => {
  return (
    <header className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Name and Title */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 dark:text-white mb-6">
            Chinmay Kuchinad
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light mb-4">
            Deep Learning Engineer
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-500">
            Incoming @ AMD • USC MS Machine Learning
          </p>
        </div>

        {/* Brief Introduction */}
        <div className="mb-12">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg max-w-3xl">
            Building efficient AI systems that scale from research to production. 
            Specializing in multi-agent systems, GPU optimization, and model compression. 
            Currently researching distributed training and edge deployment at USC.
          </p>
        </div>

        {/* Contact Links - Simplified */}
        <div className="flex flex-wrap items-center gap-8">
          <a
            href="mailto:ckuchina@usc.edu"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ckuchina@usc.edu
          </a>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/chinmaydk99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/chinmay-dattanand-kuchinad-a01168171"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            
            <a
              href="https://huggingface.co/chinmaydk99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="HuggingFace"
            >
              <SiHuggingface className="text-xl" />
            </a>
          </div>

          <a
            href="/Chinmay_Kuchinad_Resume.pdf"
            download
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <HiDownload className="text-lg" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header