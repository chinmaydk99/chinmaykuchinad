'use client'
import React from 'react'

const Achievements = ({ isDarkMode }) => {
  const achievements = [
    {
      category: 'Research Impact',
      items: [
        {
          title: 'FlashAttention Optimization',
          description: '2x memory efficiency improvement over baseline implementation',
          metric: '40% speed increase'
        },
        {
          title: 'Edge ML Pipeline',
          description: 'Reduced inference latency by 43% on heterogeneous devices',
          metric: '60% model sparsity'
        },
        {
          title: 'Multi-Agent System',
          description: 'Built production-ready LangGraph system with 5 specialized agents',
          metric: '80% automation rate'
        }
      ]
    },
    {
      category: 'Technical Leadership',
      items: [
        {
          title: 'Open Source Projects',
          description: '100 Days of CUDA - Educational resource with daily implementations',
          metric: 'Educational impact'
        },
        {
          title: 'Model Architecture',
          description: 'Implemented Gemma3-270M from scratch with sliding window attention',
          metric: 'Full pre-training'
        },
        {
          title: 'Production Systems',
          description: 'Deployed ML pipelines at Bosch serving Honda automotive systems',
          metric: '32% error reduction'
        }
      ]
    },
    {
      category: 'Scale & Impact',
      items: [
        {
          title: 'Healthcare AI',
          description: 'Fine-tuned Llama-3.2 on MIMIC-IV for clinical diagnosis',
          metric: '85% accuracy'
        },
        {
          title: 'FOTA Testing Framework',
          description: 'Automated testing system increasing success rates',
          metric: '73% → 91% improvement'
        },
        {
          title: 'Multi-turn RL System',
          description: 'VERL-based distributed training for CUDA code generation',
          metric: 'Distributed setup'
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
            Key Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Measurable impact across research, production systems, and open source contributions.
          </p>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/projects"
              className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View All Projects
            </a>
            <a
              href="/experience"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              Experience & Skills
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              Education & Research
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-2 border-gray-200 dark:border-gray-800 pl-4">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {item.description}
                    </p>
                    <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                      {item.metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notable Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-1">9+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-1">5+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">HuggingFace Models</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-1">100+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">CUDA Implementations</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 dark:text-white mb-1">3+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements