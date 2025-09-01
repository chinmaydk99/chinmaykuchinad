'use client'
import React from 'react'

const WorkExperience = ({isDarkMode}) => {
  const experiences = [
    {
      title: 'Graduate Student Researcher',
      company: 'University of Southern California',
      location: 'Los Angeles, CA',
      period: 'Jul 2025 - Present',
      current: true,
      logo: 'user-image.png',
      description: [
        'Building multi-turn RL-based CUDA code generation system using VERL backend',
        'Researching efficient training strategies for code generation models',
        'Implementing custom reward functions for optimized GPU kernel generation'
      ]
    },
    {
      title: 'Graduate Machine Learning Engineer',
      company: 'USC Information Sciences Institute',
      location: 'Los Angeles, CA',
      period: 'Feb 2025 - May 2025',
      logo: 'user-image.png',
      description: [
        'Developing pipeline parallelism strategies for PipeEdge framework with dynamic partitioning algorithms',
        'Reduced end-to-end latency by 43% through intelligent layer allocation across heterogeneous edge devices',
        'Implemented quantization and pruning methods achieving 60% sparsity in Vision Transformer models'
      ]
    },
    {
      title: 'Applied AI Intern',
      company: 'Samsung Electronics America',
      location: 'Ridgefield Park, NJ',
      period: 'Jun 2024 - Aug 2024',
      logo: 'vscode.png',
      description: [
        'Developed multi-agent email campaign generation system using LangGraph and open-source LLMs',
        'Engineered ChromaDB-powered RAG system for precise product information retrieval',
        'Fine-tuned Llama-3.1 and Gemma models using QLoRA techniques on marketing campaign data'
      ]
    },
    {
      title: 'Software Engineer - Machine Learning',
      company: 'Bosch Global Software Technologies',
      location: 'Bangalore, India',
      period: 'Sep 2020 - Dec 2022',
      logo: 'git.png',
      description: [
        'Built production ML pipelines using MLflow and AWS SageMaker for engine performance optimization',
        'Reduced RAM usage prediction error by 32% for Honda Japan automotive systems',
        'Developed automated FOTA testing framework increasing flash success rates from 73% to 91%',
        'Implemented automated data drift detection with CloudWatch triggering model retraining'
      ]
    },
    {
      title: 'Machine Learning Intern',
      company: 'Bosch Global Software Technologies',
      location: 'Bangalore, India',
      period: 'Jan 2020 - May 2020',
      logo: 'git.png',
      description: [
        'Implemented ML pipeline for customer feedback classification using scikit-learn',
        'Deployed inference API using FastAPI and Docker for text classification model'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Building production ML systems and conducting research in distributed AI and GPU optimization.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-12 bottom-0 w-px bg-gray-200 dark:bg-gray-800 ml-6"></div>
              )}
              
              <div className="flex gap-6">
                {/* Company logo */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <img 
                    src={`/${exp.logo}`} 
                    alt={exp.company}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-gray-400 dark:text-gray-600">•</span>
                      <span>{exp.location}</span>
                      <span className="text-gray-400 dark:text-gray-600">•</span>
                      <span>{exp.period}</span>
                      {exp.current && (
                        <>
                          <span className="text-gray-400 dark:text-gray-600">•</span>
                          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded">
                            Current
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-gray-400 dark:text-gray-600 mr-2 mt-1.5 text-xs">▪</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience