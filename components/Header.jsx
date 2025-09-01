'use client'
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiGooglescholar, SiHuggingface } from 'react-icons/si'
import { HiDownload } from 'react-icons/hi'

const Header = ({ isDarkMode }) => {
  return (
    <header className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-4">
            Chinmay Kuchinad
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
            Deep Learning Engineer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 mt-2">
            Incoming @ AMD | USC MS Machine Learning & Data Science
          </p>
        </div>

        {/* Brief Introduction */}
        <div className="mb-8 max-w-3xl">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Specializing in multi-agent AI systems, GPU optimization, and production ML engineering. 
            Research focus on distributed training, model compression, and edge deployment. 
            Building efficient AI solutions that scale from research to production.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 py-6 border-y border-gray-200 dark:border-gray-800">
          <div>
            <div className="text-2xl font-light text-gray-900 dark:text-white">3+ Years</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">ML Engineering</div>
          </div>
          <div>
            <div className="text-2xl font-light text-gray-900 dark:text-white">15+ Models</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Deployed to Production</div>
          </div>
          <div>
            <div className="text-2xl font-light text-gray-900 dark:text-white">43% Faster</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Edge Inference</div>
          </div>
          <div>
            <div className="text-2xl font-light text-gray-900 dark:text-white">3 Papers</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Published</div>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:ckuchina@usc.edu"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <FaEnvelope className="text-lg" />
            <span>ckuchina@usc.edu</span>
          </a>
          
          <a
            href="https://github.com/chinmaydk99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/chinmay-dattanand-kuchinad-a01168171"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
          
          <a
            href="https://huggingface.co/chinmaydk99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <SiHuggingface className="text-lg" />
            <span>HuggingFace</span>
          </a>

          <a
            href="/Chinmay_Kuchinad_Resume.pdf"
            download
            className="ml-auto text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md hover:border-gray-400 dark:hover:border-gray-600"
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