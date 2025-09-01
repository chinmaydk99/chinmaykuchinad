import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const TechnicalSkills = ({isDarkMode}) => {
  
  const expertiseAreas = [
    {
      title: "AI/ML Engineering",
      icon: "🧠",
      highlight: true, // This will be visually emphasized
      categories: [
        {
          name: "LLM Development",
          skills: ["Llama-3.2", "GPT-4", "Gemini", "Hugging Face", "QLoRA", "PEFT"],
          level: "expert"
        },
        {
          name: "Agentic AI",
          skills: ["LangGraph", "LangChain", "CrewAI", "OpenAI Agents SDK"],
          level: "expert",
          featured: true // Special highlighting for multi-agent
        },
        {
          name: "ML Frameworks",
          skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost"],
          level: "expert"
        },
        {
          name: "MLOps",
          skills: ["MLflow", "SageMaker", "Grafana", "Prometheus"],
          level: "advanced"
        }
      ]
    },
    {
      title: "High-Performance Computing",
      icon: "⚡",
      highlight: true,
      categories: [
        {
          name: "GPU Programming",
          skills: ["CUDA", "Triton"],
          level: "expert"
        },
        {
          name: "Optimization",
          skills: ["Quantization", "Model Pruning", "Pipeline Parallelism"],
          level: "expert"
        },
        {
          name: "Distributed Systems",
          skills: ["Kubernetes", "Docker", "AWS EKS"],
          level: "advanced"
        }
      ]
    },
    {
      title: "Data Engineering & Cloud",
      icon: "🔧",
      categories: [
        {
          name: "Data Pipeline",
          skills: ["Kafka", "Spark", "Airflow", "Snowflake"],
          level: "advanced"
        },
        {
          name: "Cloud Platforms",
          skills: ["AWS (SageMaker, S3, Lambda)", "Docker", "Kubernetes"],
          level: "advanced"
        },
        {
          name: "Backend",
          skills: ["FastAPI", "Flask", "Node.js", "Express.js"],
          level: "proficient"
        }
      ]
    },
    {
      title: "Programming & Development",
      icon: "💻",
      categories: [
        {
          name: "Core Languages",
          skills: ["Python", "C++", "CUDA", "JavaScript/TypeScript"],
          level: "expert"
        },
        {
          name: "Data Science",
          skills: ["R", "SQL", "Pandas", "NumPy", "SciPy"],
          level: "expert"
        },
        {
          name: "Visualization",
          skills: ["Matplotlib", "Seaborn", "Plotly"],
          level: "advanced"
        }
      ]
    }
  ];

  const specializations = [
    {
      title: "Multi-Agent Systems",
      description: "Orchestrating LLMs for complex workflows",
      icon: "🤖",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "GPU Optimization",
      description: "CUDA & Triton kernel development",
      icon: "⚡",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "LLM Fine-tuning",
      description: "Parameter-efficient training & deployment",
      icon: "🧠",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Edge AI",
      description: "Distributed ML & pipeline parallelism",
      icon: "🔥",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'expert': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700';
      case 'advanced': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700';
      case 'proficient': return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600';
    }
  };

  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    id="skills" className='w-full px-[12%] py-10 scroll-mt-20 bg-gray-50 dark:bg-gray-900/50'>

       <motion.h4 
       initial={{ y: -20, opacity: 0 }} 
       whileInView={{ y: 0, opacity: 1 }} 
       transition={{ delay: 0.3, duration: 0.5 }}
       className='text-center mb-2 text-lg font-Ovo'>
       Technical Expertise</motion.h4>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Skills & Technologies</motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Specialized in multi-agent AI systems, GPU optimization, and production ML engineering with extensive experience across the full AI/ML stack.</motion.p>

      {/* Core Specializations - Featured Section */}
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className='mb-16'>
        <h3 className='text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8'>🎯 Core Specializations</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
          {specializations.map((spec, index) => (
            <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className='relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group'
            >
              <div className={`h-32 bg-gradient-to-br ${spec.color} p-6 text-white relative`}>
                <div className='absolute top-4 right-4 text-2xl opacity-80 group-hover:scale-110 transition-transform duration-300'>
                  {spec.icon}
                </div>
                <div className='absolute bottom-4 left-4'>
                  <h4 className='font-semibold text-lg mb-1'>{spec.title}</h4>
                  <p className='text-sm opacity-90'>{spec.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical Expertise Areas */}
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
        
        {expertiseAreas.map((area, areaIndex) => (
          <motion.div 
          key={areaIndex}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 * areaIndex, duration: 0.6 }}
          className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
            area.highlight ? 'ring-2 ring-blue-500/20 hover:ring-blue-500/40' : ''
          }`}>
            
            <div className='flex items-center gap-3 mb-6'>
              <span className='text-2xl'>{area.icon}</span>
              <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{area.title}</h3>
              {area.highlight && (
                <span className='px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium'>
                  Core Strength
                </span>
              )}
            </div>
            
            <div className='space-y-4'>
              {area.categories.map((category, catIndex) => (
                <div key={catIndex} className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  category.featured 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-300 dark:border-blue-600' 
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                } hover:shadow-md`}>
                  
                  <div className='flex items-center justify-between mb-3'>
                    <h4 className='font-medium text-gray-800 dark:text-white flex items-center gap-2'>
                      {category.name}
                      {category.featured && <span className='text-lg'>⭐</span>}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(category.level)}`}>
                      {category.level}
                    </span>
                  </div>
                  
                  <div className='flex flex-wrap gap-2'>
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                          category.featured 
                            ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200' 
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

      </motion.div>

      {/* Achievement Stats */}
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16'>
        
        <div className='text-center'>
          <div className='text-3xl font-bold text-blue-600 dark:text-blue-400'>5+</div>
          <div className='text-sm text-gray-600 dark:text-gray-400'>Multi-Agent Projects</div>
        </div>
        
        <div className='text-center'>
          <div className='text-3xl font-bold text-green-600 dark:text-green-400'>15+</div>
          <div className='text-sm text-gray-600 dark:text-gray-400'>ML Models Deployed</div>
        </div>
        
        <div className='text-center'>
          <div className='text-3xl font-bold text-purple-600 dark:text-purple-400'>3</div>
          <div className='text-sm text-gray-600 dark:text-gray-400'>Research Publications</div>
        </div>
        
        <div className='text-center'>
          <div className='text-3xl font-bold text-orange-600 dark:text-orange-400'>43%</div>
          <div className='text-sm text-gray-600 dark:text-gray-400'>Performance Improvement</div>
        </div>
        
      </motion.div>

    </motion.div>
  )
}

export default TechnicalSkills 