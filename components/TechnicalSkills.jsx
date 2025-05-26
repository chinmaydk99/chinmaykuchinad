import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const TechnicalSkills = ({isDarkMode}) => {
  
  const skillCategories = [
    {
      title: "Programming & Systems",
      icon: "💻",
      skills: [
        { name: "Python", icon: "🐍", color: "text-blue-600" },
        { name: "C++", icon: "⚡", color: "text-green-600" },
        { name: "CUDA", logo: assets.cuda_logo, color: "text-green-500" },
        { name: "JavaScript", icon: "🟨", color: "text-yellow-500" },
        { name: "SQL", icon: "🗄️", color: "text-purple-600" }
      ]
    },
    {
      title: "ML/AI Frameworks",
      icon: "🤖",
      skills: [
        { name: "PyTorch", logo: assets.pytorch_logo, color: "text-red-500" },
        { name: "TensorFlow", icon: "🧠", color: "text-orange-500" },
        { name: "Hugging Face", logo: assets.huggingface_logo, color: "text-yellow-500" },
        { name: "LangChain", logo: assets.langchain_logo, color: "text-green-500" },
        { name: "LangGraph", logo: assets.langgraph_logo, color: "text-blue-500" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: "☁️", color: "text-orange-500" },
        { name: "Docker", logo: assets.docker_logo, color: "text-blue-500" },
        { name: "Kubernetes", logo: assets.kubernetes_logo, color: "text-purple-500" },
        { name: "MLflow", icon: "📊", color: "text-green-500" },
        { name: "GitHub Actions", icon: "⚙️", color: "text-gray-600" }
      ]
    },
    {
      title: "Specialized Tools",
      icon: "⚡",
      skills: [
        { name: "Triton", icon: "🔥", color: "text-cyan-500" },
        { name: "OpenAI SDK", icon: "🤖", color: "text-green-500" },
        { name: "CrewAI", icon: "👥", color: "text-purple-500" },
        { name: "ChromaDB", icon: "🔍", color: "text-blue-500" },
        { name: "Snowflake", icon: "❄️", color: "text-indigo-500" }
      ]
    }
  ];

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
        My technical toolkit spans from low-level GPU programming to high-level AI orchestration, enabling me to build end-to-end ML solutions.</motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
              key={categoryIndex}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * categoryIndex, duration: 0.6 }}
              className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
                
                <div className='flex items-center gap-3 mb-6'>
                  <span className='text-2xl'>{category.icon}</span>
                  <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{category.title}</h3>
                </div>
                
                <div className='grid grid-cols-2 gap-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                    key={skillIndex}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className='flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer group'>
                      
                      <div className='w-8 h-8 flex items-center justify-center mb-2'>
                        {skill.logo ? (
                          <Image src={skill.logo} alt={skill.name} className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'/>
                        ) : (
                          <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>{skill.icon}</span>
                        )}
                      </div>
                      
                      <span className={`text-sm font-medium text-center ${skill.color} group-hover:text-opacity-80 transition-colors duration-300`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

        </motion.div>

        {/* Quick Stats */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16'>
          
          <div className='text-center'>
            <div className='text-3xl font-bold text-blue-600 dark:text-blue-400'>8+</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>Technologies Mastered</div>
          </div>
          
          <div className='text-center'>
            <div className='text-3xl font-bold text-green-600 dark:text-green-400'>15+</div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>Projects Completed</div>
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