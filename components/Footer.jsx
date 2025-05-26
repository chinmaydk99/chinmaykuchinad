import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-2'>
          Chinmay<span className='text-blue-600 dark:text-blue-400'>.</span>
        </h2>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            ckuchina@usc.edu
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Chinmay Kuchinad. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/chinmaydk99" className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>GitHub</a></li>
            <li><a target='_blank' href="https://linkedin.com/in/chinmay-dattanand-kuchinad-a01168171" className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>LinkedIn</a></li>
            <li><a target='_blank' href="https://github.com/chinmaydk99" className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>Portfolio</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
