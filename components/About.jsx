import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  const educationData = [
    {
      degree: "Master of Science in Machine Learning and Data Science",
      institution: "University of Southern California (USC)",
      location: "Los Angeles, CA",
      duration: "Aug 2023 - May 2025",
      gpa: "3.61/4.0",
      coursework: [
        "Deep Learning and Neural Networks",
        "Machine Learning for Data Science", 
        "Natural Language Processing",
        "Computer Vision",
        "Statistical Learning Theory",
        "Distributed Systems for ML"
      ],
      achievements: [
        "Research Assistant at USC Information Sciences Institute",
        "Focus on Edge AI and Distributed ML Systems"
      ]
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "PES University",
      location: "Bangalore, India", 
      duration: "Aug 2018 - Jul 2022",
      gpa: "8.84/10.0",
      coursework: [
        "Data Structures and Algorithms",
        "Digital Signal Processing",
        "Machine Learning Fundamentals",
        "Computer Networks",
        "Database Management Systems",
        "Software Engineering"
      ],
      achievements: [
        "Top 10% of graduating class",
        "Published research in ML applications",
        "Led multiple technical projects"
      ]
    }
  ];

  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction</motion.h4>

      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        About me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'
                >I am a Graduate Student at USC pursuing MS in Machine Learning and Data Science. My expertise spans Agentic AI systems, LLM optimization, and GPU programming. I've worked at Samsung Electronics and Bosch, building production ML systems and multi-agent AI applications. Currently researching Edge AI and distributed ML systems at USC Information Sciences Institute.</p>
            </motion.div>
        </motion.div>

        {/* Detailed Education Section */}
        <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay: 0.2}}
        className='my-20'>
          <motion.h3
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.3}}
          className='text-center text-3xl font-Ovo mb-12 text-gray-800 dark:text-white'>
            Education
          </motion.h3>

          <div className='space-y-8'>
            {educationData.map((edu, index) => (
              <motion.div
              key={index}
              initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: index * 0.2}}
              className='bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700'>
                
                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6'>
                  {/* Left side - Main info */}
                  <div className='flex-1'>
                    <div className='flex items-start gap-4 mb-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0'>
                        <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                          <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z'/>
                        </svg>
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-xl font-bold text-gray-800 dark:text-white mb-1'>
                          {edu.degree}
                        </h4>
                        <p className='text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1'>
                          {edu.institution}
                        </p>
                        <div className='flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400'>
                          <span className='flex items-center gap-1'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
                            </svg>
                            {edu.location}
                          </span>
                          <span className='flex items-center gap-1'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd'/>
                            </svg>
                            {edu.duration}
                          </span>
                          <span className='flex items-center gap-1 font-semibold text-green-600 dark:text-green-400'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z' clipRule='evenodd'/>
                            </svg>
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div className='mb-6'>
                      <h5 className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide'>
                        Key Coursework
                      </h5>
                      <div className='flex flex-wrap gap-2'>
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className='px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium'>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide'>
                        Key Achievements
                      </h5>
                      <ul className='space-y-2'>
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className='flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400'>
                            <svg className='w-4 h-4 text-green-500 mt-0.5 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'/>
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.2}}
        className='mt-20'>
          <motion.h4
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

          <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index)=>(
                  <motion.li 
                  whileHover={{ scale: 1.1 }}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                   key={index}>
                      <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                  </motion.li>
              ))}
          </motion.ul>
        </motion.div>
    </motion.div>
  )
}

export default About
