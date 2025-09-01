'use client'
import React from 'react'

const About = ({ isDarkMode }) => {
  const education = [
    {
      degree: 'Master of Science',
      field: 'Machine Learning and Data Science',
      institution: 'University of Southern California',
      period: 'Aug 2023 - May 2025',
      gpa: '3.61/4.0',
      coursework: [
        'Deep Learning and Neural Networks',
        'Natural Language Processing',
        'Computer Vision',
        'Distributed Systems for ML',
        'Statistical Learning Theory',
        'Advanced Machine Learning'
      ]
    },
    {
      degree: 'Bachelor of Technology',
      field: 'Electronics and Communication Engineering',
      institution: 'PES University',
      period: 'Aug 2016 - Aug 2020',
      gpa: '8.84/10.0',
      coursework: [
        'Data Structures and Algorithms',
        'Machine Learning Fundamentals',
        'Digital Signal Processing',
        'Computer Networks',
        'Database Management Systems',
        'Software Engineering'
      ]
    }
  ]

  const publications = [
    {
      title: 'Audio Steganography Using Multi LSB and IGS Techniques',
      venue: 'International Conference on Signal Processing',
      year: '2020',
      type: 'Conference Paper'
    }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
            Education & Research
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Academic foundation in machine learning, computer science, and engineering.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
              <div className="mb-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {edu.degree} in {edu.field}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                  <span className="font-medium">{edu.institution}</span>
                  <span className="text-gray-400 dark:text-gray-600">•</span>
                  <span>{edu.period}</span>
                  <span className="text-gray-400 dark:text-gray-600">•</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">GPA: {edu.gpa}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publications */}
        {publications.length > 0 && (
          <div className="pt-12 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
              Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-gray-400 dark:text-gray-600 text-sm mt-1">[{index + 1}]</span>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {pub.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {pub.venue} • {pub.year} • {pub.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Research Interests */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
            Research Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Distributed AI Systems
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pipeline parallelism, edge computing, and heterogeneous device optimization
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Model Compression
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Quantization, pruning, and knowledge distillation for efficient inference
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Multi-Agent Systems
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                LLM orchestration, autonomous agents, and collaborative AI workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About