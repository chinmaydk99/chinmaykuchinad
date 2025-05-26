import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }

            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
       <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>

      <div className={`fixed top-0 right-0 w-full z-50 transition-all duration-500 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out" 
             style={{ width: `${scrollProgress}%` }}></div>

        <nav className='w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between'>
          <a href="#top" className='text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer'>
              Chinmay<span className='text-blue-600 dark:text-blue-400'>.</span>
          </a>

          <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
              <li><a className='font-Ovo' href="#top">Home</a></li>
              <li><a className='font-Ovo' href="#about">About</a></li>
              <li><a className='font-Ovo' href="#workexp">Work Experience</a></li>
              <li><a className='font-Ovo' href="#projects">Projects</a></li>
              <li><a className='font-Ovo' href="#skills">Technical Skills</a></li>
              <li><a className='font-Ovo' href="#blogs">Blogs</a></li>
              <li><a className='font-Ovo' href="#contact">Contact</a></li>
          </ul>

          <div className='flex items-center gap-4'>

              <button onClick={()=> setIsDarkMode(prev => !prev)}>
                  <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
              </button>

              <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact 
              <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/></a>

              <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
              </button>
          </div>

          {/* -- ----- mobile menu ------  -- */}

          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

              <div className='absolute right-6 top-6' onClick={closeMenu}>
                  <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
              </div>

              <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
              <li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
              <li><a className='font-Ovo' onClick={closeMenu} href="#workexp">Work Experience</a></li>
              <li><a className='font-Ovo' onClick={closeMenu} href="#projects">Projects</a></li>
              <li><a className='font-Ovo' onClick={closeMenu} href="#skills">Technical Skills</a></li>
              <li><a className='font-Ovo' onClick={closeMenu} href="#blogs">Blogs</a></li>
              <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact</a></li>
          </ul>


        </nav>
      </div>
    </>
  )
}

export default Navbar
