import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

const WorkExperience = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    id="workexp" className='w-full px-[12%] py-10 scroll-mt-20'>

       <motion.h4 
       initial={{ y: -20, opacity: 0 }} 
       whileInView={{ y: 0, opacity: 1 }} 
       transition={{ delay: 0.3, duration: 0.5 }}
       className='text-center mb-2 text-lg font-Ovo'>
       My Journey</motion.h4>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Work Experience</motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        My professional journey in Machine Learning, Agentic AI, and GPU programming across research and industry.</motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='max-w-5xl mx-auto'>
            
            {/* Experience Item 1 - USC ISI */}
            <motion.div 
            whileHover={{scale: 1.02}}
            className='border border-gray-400 rounded-lg p-8 mb-6 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <div className='flex items-start gap-4 mb-4'>
                    <div className='w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2 shadow-md'>
                        <Image src={assets.usc_isi_logo} alt='USC ISI' className='w-full h-full object-contain'/>
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
                            <h3 className='text-xl font-semibold text-gray-700 dark:text-white'>Researcher – Edge AI & Distributed Machine Learning</h3>
                            <span className='text-sm text-gray-600 dark:text-white/80 font-mono'>Feb 2025 – May 2025</span>
                        </div>
                        <h4 className='text-lg text-blue-600 dark:text-blue-400 mb-1 font-semibold'>USC Information Sciences Institute</h4>
                        <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
                            </svg>
                            Los Angeles, CA
                            <span className='mx-2'>•</span>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z' clipRule='evenodd'/>
                            </svg>
                            Research Position
                        </div>
                    </div>
                </div>
                <div className='space-y-2 text-sm text-gray-600 dark:text-white/80'>
                    <p>• Developing pipeline parallelism strategies for PipeEdge framework with <span className='font-semibold text-green-600'>43% latency reduction</span></p>
                    <p>• Implementing post-training quantization and magnitude-based pruning achieving <span className='font-semibold text-green-600'>60% sparsity</span> in Vision Transformers</p>
                    <p>• Creating dynamic partitioning algorithms for heterogeneous edge devices</p>
                </div>
                <div className='flex flex-wrap gap-2 mt-4'>
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs'>Edge AI</span>
                    <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs'>Pipeline Parallelism</span>
                    <span className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs'>Model Optimization</span>
                </div>
            </motion.div>

            {/* Experience Item 2 - Samsung */}
            <motion.div 
            whileHover={{scale: 1.02}}
            className='border border-gray-400 rounded-lg p-8 mb-6 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <div className='flex items-start gap-4 mb-4'>
                    <div className='w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2 shadow-md'>
                        <Image src={assets.samsung_logo} alt='Samsung Electronics' className='w-full h-full object-contain'/>
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
                            <h3 className='text-xl font-semibold text-gray-700 dark:text-white'>Generative AI Application Intern</h3>
                            <span className='text-sm text-gray-600 dark:text-white/80 font-mono'>Jun 2024 – Aug 2024</span>
                        </div>
                        <h4 className='text-lg text-blue-600 dark:text-blue-400 mb-1 font-semibold'>Samsung Electronics America</h4>
                        <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
                            </svg>
                            Mountain View, CA
                            <span className='mx-2'>•</span>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z' clipRule='evenodd'/>
                            </svg>
                            Internship
                        </div>
                    </div>
                </div>
                <div className='space-y-2 text-sm text-gray-600 dark:text-white/80'>
                    <p>• Developed multi-agent email campaign generation system using <span className='font-semibold text-orange-600'>LangGraph</span> and open-source LLMs</p>
                    <p>• Engineered ChromaDB-powered RAG system for precise product information retrieval</p>
                    <p>• Fine-tuned LLMs (Llama-3.1, Gemma) using <span className='font-semibold text-orange-600'>PEFT and QLoRA</span> techniques</p>
                </div>
                <div className='flex flex-wrap gap-2 mt-4'>
                    <span className='px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs'>Agentic AI</span>
                    <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs'>LangGraph</span>
                    <span className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs'>RAG Systems</span>
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs'>LLM Fine-tuning</span>
                </div>
            </motion.div>

            {/* Experience Item 3 - Bosch */}
            <motion.div 
            whileHover={{scale: 1.02}}
            className='border border-gray-400 rounded-lg p-8 mb-6 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <div className='flex items-start gap-4 mb-4'>
                    <div className='w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2 shadow-md'>
                        <Image src={assets.bosch_logo} alt='Bosch' className='w-full h-full object-contain'/>
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
                            <h3 className='text-xl font-semibold text-gray-700 dark:text-white'>Software Engineer - Machine Learning</h3>
                            <span className='text-sm text-gray-600 dark:text-white/80 font-mono'>Jan 2020 – Nov 2022</span>
                        </div>
                        <h4 className='text-lg text-blue-600 dark:text-blue-400 mb-1 font-semibold'>Bosch Global Software Technologies</h4>
                        <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3'>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
                            </svg>
                            Bangalore, India
                            <span className='mx-2'>•</span>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z' clipRule='evenodd'/>
                            </svg>
                            Full-time
                        </div>
                    </div>
                </div>
                <div className='space-y-2 text-sm text-gray-600 dark:text-white/80'>
                    <p>• Built production ML pipelines for Honda Japan, reducing RAM usage prediction error by <span className='font-semibold text-green-600'>32%</span></p>
                    <p>• Developed automated FOTA testing framework, increasing flash success rates from <span className='font-semibold text-green-600'>73% to 91%</span></p>
                    <p>• Managed data pipelines for ECU data ingestion and fault prediction systems</p>
                </div>
                <div className='flex flex-wrap gap-2 mt-4'>
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs'>PyTorch</span>
                    <span className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs'>Production ML</span>
                    <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs'>Data Pipelines</span>
                    <span className='px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs'>Automotive AI</span>
                </div>
            </motion.div>

        </motion.div>

        {/* View More Button */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className='text-center mt-12'>
          <Link 
            href="/experience"
            className='inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium'
          >
            View Detailed Experience
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </motion.div>

    </motion.div>
  )
}

export default WorkExperience 