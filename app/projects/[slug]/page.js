'use client'
import { workData } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function ProjectPage({ params }) {
  // Find the project based on the slug (converted from title)
  const project = workData.find(p => 
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      {/* Navigation */}
      <nav className='w-full px-[12%] py-6 border-b border-gray-200 dark:border-gray-700'>
        <Link href="/#projects" className='inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300'>
          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
          </svg>
          Back to Projects
        </Link>
      </nav>

      {/* Project Header */}
      <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='w-full px-[12%] py-12'>
        
        <div className='max-w-4xl mx-auto'>
          {/* Project Image/Banner */}
          <div className='h-64 md:h-80 rounded-xl mb-8 relative overflow-hidden'>
            {project.bgImage ? (
              <Image 
                src={project.bgImage} 
                alt={project.title}
                fill
                className='object-cover'
              />
            ) : (
              <div className='h-full bg-gradient-to-br from-blue-500 to-purple-600'></div>
            )}
            <div className='absolute inset-0 bg-black/40'></div>
            <div className='absolute top-6 left-6'>
              <span className='px-4 py-2 bg-white/90 text-gray-800 rounded-full text-sm font-medium'>
                {project.category}
              </span>
            </div>
            <div className='absolute bottom-6 left-6 text-white'>
              <h1 className='text-3xl md:text-4xl font-bold mb-2'>{project.title}</h1>
              <p className='text-lg opacity-90'>{project.description}</p>
            </div>
          </div>

          {/* Project Links */}
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='flex flex-wrap gap-4 mb-8'>
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className='inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z' clipRule='evenodd'/>
                </svg>
                View on GitHub
              </a>
            )}
            
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className='inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
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
                className='inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z' clipRule='evenodd' />
                </svg>
                Research Paper
              </a>
            )}
          </motion.div>

          {/* Project Details Grid */}
          <div className='grid md:grid-cols-2 gap-8'>
            
            {/* Motivation */}
            {project.motivation && (
              <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='bg-gray-50 dark:bg-gray-800 rounded-xl p-6'>
                <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2'>
                  <span className='text-2xl'>💡</span>
                  Motivation
                </h2>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {project.motivation}
                </p>
              </motion.div>
            )}

            {/* Brief Description */}
            {project.briefDescription && (
              <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='bg-gray-50 dark:bg-gray-800 rounded-xl p-6'>
                <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2'>
                  <span className='text-2xl'>📋</span>
                  Overview
                </h2>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {project.briefDescription}
                </p>
              </motion.div>
            )}

          </div>

          {/* Tech Stack */}
          {project.techStack && (
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className='mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6'>
              <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2'>
                <span className='text-2xl'>🛠️</span>
                Technology Stack
              </h2>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {project.techStack.map((tech, index) => (
                  <div key={index} className='bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300'>
                    <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Performance Metrics */}
          {project.metrics && (
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className='mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6'>
              <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2'>
                <span className='text-2xl'>📊</span>
                Key Achievements
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {project.metrics.map((metric, index) => (
                  <div key={index} className='bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300'>
                    <div className='w-3 h-3 bg-green-500 rounded-full mx-auto mb-2'></div>
                    <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </motion.div>
    </div>
  )
} 