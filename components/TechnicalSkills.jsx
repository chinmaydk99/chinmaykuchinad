'use client'
import React from 'react'

const TechnicalSkills = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'LLM Development', items: ['Llama-3.2', 'GPT-4', 'Gemma', 'QLoRA', 'PEFT', 'LoRA'] },
        { name: 'Multi-Agent Systems', items: ['LangGraph', 'LangChain', 'CrewAI', 'OpenAI Agents SDK'] },
        { name: 'ML Frameworks', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost'] },
        { name: 'MLOps', items: ['MLflow', 'SageMaker', 'Weights & Biases', 'Model Registry'] }
      ]
    },
    {
      title: 'High-Performance Computing',
      skills: [
        { name: 'GPU Programming', items: ['CUDA', 'Triton', 'cuDNN', 'TensorRT'] },
        { name: 'Optimization', items: ['Quantization', 'Pruning', 'Knowledge Distillation', 'Mixed Precision'] },
        { name: 'Parallel Computing', items: ['MPI', 'OpenMP', 'Distributed Training', 'Pipeline Parallelism'] }
      ]
    },
    {
      title: 'Software Engineering',
      skills: [
        { name: 'Languages', items: ['Python', 'C++', 'JavaScript', 'SQL', 'Bash'] },
        { name: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
        { name: 'Data Engineering', items: ['Spark', 'Kafka', 'Airflow', 'PostgreSQL', 'MongoDB'] }
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
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded"
                        >
                          {skill}
                        </span>
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