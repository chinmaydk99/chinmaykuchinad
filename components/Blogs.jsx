import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Blogs = ({isDarkMode}) => {
  
  const blogPosts = [
    {
      title: "Breaking O(n²): Efficient Attention with FlashAttention-2 in CUDA",
      description: "End-to-end implementation of Flash Attention-2 with CUDA optimizations, mathematical derivations, and real-world performance improvements.",
      platform: "LinkedIn",
      date: "Mar 7, 2025",
      readTime: "8 min read",
      tags: ["CUDA", "FlashAttention", "GPU Optimization", "Transformers"],
      link: "https://www.linkedin.com/pulse/breaking-efficient-attention-flashattention-2-cuda-kuchinad-zncjc/?trackingId=JsNO8RC3Qsy1EbSMddJhuA%3D%3D",
      icon: "🚀",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Accelerating Transformer Position Embeddings: A Deep Dive into RoPE CUDA Implementation",
      description: "Optimizing Rotary Position Embeddings (RoPE) for transformer models with custom CUDA kernels and performance benchmarking.",
      platform: "LinkedIn", 
      date: "Mar 5, 2025",
      readTime: "7 min read",
      tags: ["RoPE", "CUDA", "Transformers", "Position Embeddings"],
      link: "https://www.linkedin.com/pulse/accelerating-transformer-position-embeddings-deep-dive-kuchinad-ik9af/?trackingId=JsNO8RC3Qsy1EbSMddJhuA%3D%3D",
      icon: "⚡",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Speeding Up INT8 Inference with Custom Triton Kernels",
      description: "Building custom Triton kernels for INT8 quantized inference, achieving significant speedups in LLM inference pipelines.",
      platform: "Medium",
      date: "2024",
      readTime: "6 min read", 
      tags: ["Triton", "INT8", "Quantization", "LLM Inference"],
      link: "https://medium.com/@chinmay.dk/speeding-up-int8-inference-with-custom-triton-kernels-998dc76ab267",
      icon: "🔥",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "In-Depth Look at GPTQ Inference Optimization with Triton",
      description: "Comprehensive analysis of GPTQ quantization techniques and Triton kernel optimizations for efficient LLM inference.",
      platform: "Medium",
      date: "2024", 
      readTime: "9 min read",
      tags: ["GPTQ", "Triton", "Quantization", "Optimization"],
      link: "https://medium.com/@chinmay.dk/in-depth-look-at-gptq-inference-optimization-with-triton-71fe7f205449",
      icon: "🧠",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    id="blogs" className='w-full px-[12%] py-10 scroll-mt-20'>

       <motion.h4 
       initial={{ y: -20, opacity: 0 }} 
       whileInView={{ y: 0, opacity: 1 }} 
       transition={{ delay: 0.3, duration: 0.5 }}
       className='text-center mb-2 text-lg font-Ovo'>
       Technical Writing</motion.h4>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Blogs & Articles</motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Sharing insights on GPU optimization, CUDA programming, and cutting-edge ML inference techniques through technical articles and deep dives.</motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            
            {blogPosts.map((post, index) => (
              <motion.article 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer'
              onClick={() => window.open(post.link, '_blank')}
              >
                
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                  <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300'></div>
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium'>
                      {post.platform}
                    </span>
                  </div>
                  <div className='absolute bottom-4 right-4'>
                    <span className='text-3xl'>{post.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2'>
                    {post.title}
                  </h3>
                  
                  <p className='text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3'>
                    {post.description}
                  </p>
                  
                  {/* Meta info */}
                  <div className='flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4'>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Tags */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className='px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs'>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read more link */}
                  <div className='flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-300'>
                    Read Article
                    <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                    </svg>
                  </div>
                </div>
                
              </motion.article>
            ))}

        </motion.div>

        {/* Call to Action */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className='text-center mt-16'>
          
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 max-w-2xl mx-auto'>
            <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-4'>
              Follow My Technical Journey
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>
              Stay updated with my latest articles on GPU optimization, CUDA programming, and ML inference techniques.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href="https://medium.com/@chinmay.dk" 
                target="_blank" 
                rel="noopener noreferrer"
                className='px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 justify-center'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z'/>
                </svg>
                Follow on Medium
              </a>
              <a 
                href="https://linkedin.com/in/chinmay-dattanand-kuchinad-a01168171" 
                target="_blank" 
                rel="noopener noreferrer"
                className='px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 justify-center'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
        </motion.div>

    </motion.div>
  )
}

export default Blogs 