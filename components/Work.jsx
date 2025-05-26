import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Agentic AI', 'GPU Programming', 'LLM Optimization', 'Machine Learning'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? workData 
    : workData.filter(project => project.category === selectedCategory);

  // Function to generate slug from project title
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
      My Portfolio</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Projects</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo'>
      Explore my projects in Agentic AI, LLM Optimization, GPU Programming, and Machine Learning systems. Each project showcases different aspects of my technical expertise.</motion.p>

      {/* Category Filter */}
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className='flex flex-wrap justify-center gap-3 mb-12'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6'>
        {filteredProjects.map((project, index)=>(
            <Link href={`/projects/${generateSlug(project.title)}`} key={index}>
              <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group'>
                
                {/* Project Image */}
                <div className='h-48 relative overflow-hidden'>
                  {project.bgImage ? (
                    <Image 
                      src={project.bgImage} 
                      alt={project.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                  ) : (
                    <div className='h-full bg-gradient-to-br from-blue-500 to-purple-600'></div>
                  )}
                  <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300'></div>
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium'>
                      {project.category}
                    </span>
                  </div>
                  <div className='absolute bottom-4 right-4'>
                    <div className='w-10 h-10 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300'>
                      <Image src={assets.send_icon} alt='View Project' className='w-5'/>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                    {project.title}
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  {project.tech && (
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs flex items-center gap-1'>
                          {tech.icon && (
                            <Image src={tech.icon} alt={tech.name || tech} className='w-3 h-3 object-contain'/>
                          )}
                          {tech.name || tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Project Links */}
                  <div className='flex flex-wrap gap-3'>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-300'
                      >
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z' clipRule='evenodd'/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm font-medium transition-colors duration-300'
                      >
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule='evenodd' />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    
                    {project.paper && (
                      <a 
                        href={project.paper} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium transition-colors duration-300'
                      >
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z' clipRule='evenodd' />
                        </svg>
                        Paper
                      </a>
                    )}
                  </div>
                  
                  {/* Performance Metrics */}
                  {project.metrics && (
                    <div className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-600'>
                      <div className='flex flex-wrap gap-4 text-xs'>
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className='flex items-center gap-1'>
                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                            <span className='text-gray-600 dark:text-gray-400'>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
              </motion.div>
            </Link>
        ))}
    </motion.div>

    <motion.a 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1.1, duration: 0.5 }}
    href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
    </motion.a>

    </motion.div>
  )
}

export default Work
