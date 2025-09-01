'use client'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

const Contact = ({ isDarkMode }) => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ckuchina@usc.edu',
      href: 'mailto:ckuchina@usc.edu'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/chinmaydk99',
      href: 'https://github.com/chinmaydk99'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/chinmay-kuchinad',
      href: 'https://www.linkedin.com/in/chinmay-dattanand-kuchinad-a01168171'
    },
    {
      icon: SiHuggingface,
      label: 'HuggingFace',
      value: 'huggingface.co/chinmaydk99',
      href: 'https://huggingface.co/chinmaydk99'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Open to opportunities in deep learning research and engineering. 
            Feel free to reach out for collaborations or discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors group"
            >
              <contact.icon className="text-2xl text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-500">{contact.label}</p>
                <p className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Currently based in Los Angeles, CA • Available for remote opportunities
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact