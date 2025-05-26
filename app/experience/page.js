'use client'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      title: 'Researcher – Edge AI & Distributed Machine Learning',
      company: 'USC Information Sciences Institute',
      location: 'Los Angeles, CA',
      duration: 'Feb 2025 – May 2025',
      type: 'Research Position',
      logo: assets.usc_isi_logo,
      description: 'Leading research in edge AI optimization and distributed machine learning systems.',
      responsibilities: [
        'Developing pipeline parallelism strategies for PipeEdge framework with 43% latency reduction',
        'Implementing post-training quantization and magnitude-based pruning achieving 60% sparsity in Vision Transformers',
        'Creating dynamic partitioning algorithms for heterogeneous edge devices',
        'Collaborating with research teams on distributed ML optimization techniques'
      ],
      achievements: [
        '43% latency reduction in edge inference',
        '60% model sparsity with minimal accuracy loss',
        'Novel dynamic partitioning algorithms',
        'Research publication in preparation'
      ],
      technologies: ['Edge AI', 'Pipeline Parallelism', 'Model Optimization', 'PyTorch', 'CUDA', 'Distributed Systems'],
      color: 'blue'
    },
    {
      id: 2,
      title: 'Generative AI Application Intern',
      company: 'Samsung Electronics America',
      location: 'Mountain View, CA',
      duration: 'Jun 2024 – Aug 2024',
      type: 'Internship',
      logo: assets.samsung_logo,
      description: 'Developed cutting-edge generative AI applications and multi-agent systems for enterprise use.',
      responsibilities: [
        'Developed multi-agent email campaign generation system using LangGraph and open-source LLMs',
        'Engineered ChromaDB-powered RAG system for precise product information retrieval',
        'Fine-tuned LLMs (Llama-3.1, Gemma) using PEFT and QLoRA techniques',
        'Built scalable AI pipelines for automated content generation'
      ],
      achievements: [
        'Deployed production-ready multi-agent system',
        'Achieved 85% accuracy in product information retrieval',
        'Reduced content generation time by 70%',
        'Successful LLM fine-tuning with limited compute resources'
      ],
      technologies: ['Agentic AI', 'LangGraph', 'RAG Systems', 'LLM Fine-tuning', 'ChromaDB', 'PEFT', 'QLoRA'],
      color: 'orange'
    },
    {
      id: 3,
      title: 'Software Engineer - Machine Learning',
      company: 'Bosch Global Software Technologies',
      location: 'Bangalore, India',
      duration: 'Jan 2020 – Nov 2022',
      type: 'Full-time',
      logo: assets.bosch_logo,
      description: 'Built production ML systems for automotive applications and IoT devices.',
      responsibilities: [
        'Built production ML pipelines for Honda Japan, reducing RAM usage prediction error by 32%',
        'Developed automated FOTA testing framework, increasing flash success rates from 73% to 91%',
        'Managed data pipelines for ECU data ingestion and fault prediction systems',
        'Led cross-functional teams for ML model deployment and monitoring'
      ],
      achievements: [
        '32% improvement in RAM usage prediction accuracy',
        '18% increase in FOTA flash success rates',
        'Deployed 15+ ML models to production',
        'Reduced system downtime by 25%'
      ],
      technologies: ['PyTorch', 'Production ML', 'Data Pipelines', 'Automotive AI', 'MLOps', 'AWS', 'Docker'],
      color: 'green'
    }
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      {/* Navigation */}
      <nav className='w-full px-[12%] py-6 border-b border-gray-200 dark:border-gray-700'>
        <Link href="/#workexp" className='inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300'>
          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
          </svg>
          Back to Portfolio
        </Link>
      </nav>

      {/* Page Header */}
      <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='w-full px-[12%] py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900'>
        
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4'>
            Work Experience
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            My professional journey in Machine Learning, Agentic AI, and GPU programming across research and industry.
          </p>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <div className='w-full px-[12%] py-12'>
        <div className='max-w-5xl mx-auto'>
          {experiences.map((exp, index) => (
            <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className='mb-12 last:mb-0'
            >
              <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'>
                
                {/* Experience Header */}
                <div className={`bg-gradient-to-r ${
                  exp.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  exp.color === 'orange' ? 'from-orange-500 to-orange-600' :
                  'from-green-500 to-green-600'
                } p-6 text-white`}>
                  <div className='flex items-start gap-4'>
                    <div className='w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2'>
                      <Image src={exp.logo} alt={exp.company} className='w-full h-full object-contain'/>
                    </div>
                    <div className='flex-1'>
                      <h2 className='text-2xl font-bold mb-1'>{exp.title}</h2>
                      <h3 className='text-xl opacity-90 mb-2'>{exp.company}</h3>
                      <div className='flex flex-wrap items-center gap-4 text-sm opacity-80'>
                        <span className='flex items-center gap-1'>
                          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
                          </svg>
                          {exp.location}
                        </span>
                        <span className='flex items-center gap-1'>
                          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd'/>
                          </svg>
                          {exp.duration}
                        </span>
                        <span className='flex items-center gap-1'>
                          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z' clipRule='evenodd'/>
                          </svg>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Content */}
                <div className='p-6'>
                  <p className='text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed'>
                    {exp.description}
                  </p>

                  <div className='grid md:grid-cols-2 gap-6 mb-6'>
                    
                    {/* Responsibilities */}
                    <div>
                      <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2'>
                        <span className='text-xl'>📋</span>
                        Key Responsibilities
                      </h4>
                      <ul className='space-y-2'>
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className='flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300'>
                            <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2'>
                        <span className='text-xl'>🏆</span>
                        Key Achievements
                      </h4>
                      <ul className='space-y-2'>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className='flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300'>
                            <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className='text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2'>
                      <span className='text-xl'>🛠️</span>
                      Technologies Used
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                          exp.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200' :
                          'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='w-full px-[12%] py-12 bg-gray-50 dark:bg-gray-800'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-4'>
            Let's Work Together
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>
            Interested in collaborating on AI research or building innovative ML solutions?
          </p>
          <Link href="/#contact" className='inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'>
            Get In Touch
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 