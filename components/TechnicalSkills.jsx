'use client'
import React from 'react'

const TechnicalSkills = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      skills: [
        { 
          name: 'LLM Development', 
          items: [
            { skill: 'Llama-3.2', level: 'Expert', context: 'Fine-tuned on MIMIC-IV' },
            { skill: 'GPT-4', level: 'Advanced', context: 'API integration' },
            { skill: 'Gemma-270M', level: 'Expert', context: 'Implemented from scratch' },
            { skill: 'QLoRA/PEFT', level: 'Expert', context: 'Production fine-tuning' }
          ]
        },
        { 
          name: 'Multi-Agent Systems', 
          items: [
            { skill: 'LangGraph', level: 'Expert', context: '5-agent system' },
            { skill: 'LangChain', level: 'Advanced', context: 'RAG implementation' },
            { skill: 'VERL', level: 'Expert', context: 'Multi-turn RL training' }
          ]
        },
        { 
          name: 'ML Frameworks', 
          items: [
            { skill: 'PyTorch', level: 'Expert', context: 'Custom architectures' },
            { skill: 'JAX', level: 'Advanced', context: 'MoE implementation' },
            { skill: 'TensorFlow', level: 'Advanced', context: 'Production deployment' }
          ]
        }
      ]
    },
    {
      title: 'High-Performance Computing',
      skills: [
        { 
          name: 'GPU Programming', 
          items: [
            { skill: 'CUDA', level: 'Expert', context: '100+ implementations' },
            { skill: 'Triton', level: 'Expert', context: 'FlashAttention kernels' },
            { skill: 'cuDNN', level: 'Advanced', context: 'Optimization work' },
            { skill: 'TensorRT', level: 'Advanced', context: 'Inference optimization' }
          ]
        },
        { 
          name: 'Model Optimization', 
          items: [
            { skill: 'Quantization', level: 'Expert', context: '4-bit GPTQ' },
            { skill: 'Pruning', level: 'Expert', context: '60% sparsity achieved' },
            { skill: 'Knowledge Distillation', level: 'Advanced', context: 'Research projects' }
          ]
        },
        { 
          name: 'Distributed Systems', 
          items: [
            { skill: 'Distributed Training', level: 'Expert', context: 'Multi-GPU setups' },
            { skill: 'Pipeline Parallelism', level: 'Expert', context: 'PipeEdge framework' },
            { skill: 'Edge Computing', level: 'Advanced', context: 'Heterogeneous devices' }
          ]
        }
      ]
    },
    {
      title: 'Software Engineering',
      skills: [
        { 
          name: 'Languages', 
          items: [
            { skill: 'Python', level: 'Expert', context: '5+ years' },
            { skill: 'C++', level: 'Advanced', context: 'CUDA kernels' },
            { skill: 'JavaScript', level: 'Intermediate', context: 'Full-stack' },
            { skill: 'SQL', level: 'Advanced', context: 'Data pipelines' }
          ]
        },
        { 
          name: 'Production ML', 
          items: [
            { skill: 'MLflow', level: 'Expert', context: 'Bosch production' },
            { skill: 'AWS SageMaker', level: 'Advanced', context: 'Honda systems' },
            { skill: 'Docker/K8s', level: 'Advanced', context: 'Container orchestration' }
          ]
        }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Comprehensive expertise across the ML stack, from research to production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skillGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {skillGroup.name}
                    </h4>
                    <div className="space-y-2">
                      {skillGroup.items.map((item, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-between p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded">
                          <div>
                            <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                              {typeof item === 'string' ? item : item.skill}
                            </span>
                            {typeof item === 'object' && item.context && (
                              <span className="text-gray-500 dark:text-gray-400 text-xs ml-2">
                                • {item.context}
                              </span>
                            )}
                          </div>
                          {typeof item === 'object' && item.level && (
                            <span className={`px-2 py-0.5 text-xs rounded ${
                              item.level === 'Expert' 
                                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                : item.level === 'Advanced'
                                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                            }`}>
                              {item.level}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">Multi-Agent AI</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Orchestrating LLM agents for complex workflows</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">GPU Optimization</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Custom CUDA kernels and memory optimization</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">Model Compression</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Quantization and pruning for edge deployment</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 dark:text-white mb-1">Production ML</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Scalable pipelines and monitoring systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills