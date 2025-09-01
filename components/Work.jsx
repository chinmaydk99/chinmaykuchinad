'use client'
import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa'

const Work = ({ isDarkMode }) => {
  const projects = [
    {
      title: 'FlashAttention v2 GPU Optimization',
      description: 'Custom CUDA/Triton implementation achieving 2x memory efficiency and 40% speed improvement for transformer attention mechanisms.',
      technologies: ['CUDA', 'Triton', 'PyTorch', 'GPU Optimization'],
      metrics: {
        'Memory Efficiency': '2x',
        'Speed Improvement': '40%',
        'Complexity': 'O(N) Memory'
      },
      links: {
        github: 'https://github.com/chinmaydk99/Flash_Attention_v2_GPU_Optimized'
      }
    },
    {
      title: 'Multi-Agent Marketing Campaign Generator',
      description: 'Orchestrated specialized LLM agents using LangGraph for automated marketing campaign generation with consistent brand voice.',
      technologies: ['LangGraph', 'Llama-3.1', 'ChromaDB', 'Multi-Agent Systems'],
      metrics: {
        'Agents': '5 Specialized',
        'Automation': '80%',
        'Context Window': '32K tokens'
      },
      links: {
        github: 'https://github.com/chinmaydk99/Multiagent-Marketing-Campaign-Generator'
      }
    },
    {
      title: 'LLM-Based Clinical Diagnosis System',
      description: 'Fine-tuned Llama-3.2 on MIMIC-IV dataset for chronic kidney disease prediction with medical reasoning capabilities.',
      technologies: ['Llama-3.2', 'LoRA', 'MIMIC-IV', 'Healthcare AI'],
      metrics: {
        'Accuracy': '85%',
        'Dataset': 'MIMIC-IV',
        'Model Size': '3B params'
      },
      links: {
        github: 'https://github.com/chinmaydk99/LLM_Based_CKD_Prediction'
      }
    },
    {
      title: 'PipeEdge: Distributed Edge ML Pipeline',
      description: 'Pipeline parallelism with dynamic partitioning algorithms for heterogeneous edge devices, reducing latency by 43%.',
      technologies: ['Model Pruning', 'Edge Computing', 'Distributed ML', 'Vision Transformers'],
      metrics: {
        'Latency Reduction': '43%',
        'Sparsity': '60%',
        'Publication': 'IEEE'
      },
      links: {
        github: 'https://github.com/chinmaydk99/PipeEdge/tree/pruning',
        paper: 'https://ieeexplore.ieee.org/document/10096632'
      }
    },
    {
      title: '100 Days of CUDA',
      description: 'Comprehensive journey through GPU programming with daily implementations of parallel algorithms and optimization techniques.',
      technologies: ['CUDA', 'Parallel Computing', 'GPU Architecture', 'Performance Optimization'],
      metrics: {
        'Implementations': '100+',
        'Techniques': '50+',
        'Stars': '150+'
      },
      links: {
        github: 'https://github.com/chinmaydk99/100-Days-Of-CUDA'
      }
    },
    {
      title: 'GPTQ: 4-bit LLM Inference',
      description: 'Custom Triton kernels for quantized inference achieving 4x memory reduction with minimal accuracy loss.',
      technologies: ['Triton', 'Quantization', 'LLM Inference', 'Model Compression'],
      metrics: {
        'Memory Reduction': '4x',
        'Inference Speed': '3x',
        'Accuracy Loss': '<1%'
      },
      links: {
        github: 'https://github.com/chinmaydk99/GPTQ'
      }
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Research and engineering projects focusing on GPU optimization, multi-agent systems, and production ML deployment.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 text-sm"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                    )}
                    {project.links.paper && (
                      <a
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 text-sm"
                      >
                        <FaFilePdf />
                        <span>Paper</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 text-sm"
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="lg:w-64">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-500">{key}</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work