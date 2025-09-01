'use client'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-0'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            © 2025 Chinmay Kuchinad. All rights reserved.
          </p>
          <div className='flex items-center gap-6 mt-4 md:mt-0'>
            <a 
              href="https://github.com/chinmaydk99" 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm'
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/chinmay-dattanand-kuchinad-a01168171" 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm'
            >
              LinkedIn
            </a>
            <a 
              href="https://huggingface.co/chinmaydk99" 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm'
            >
              HuggingFace
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
