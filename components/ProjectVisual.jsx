'use client'
import React from 'react'

const ProjectVisual = ({ type, className }) => {
  const renderFlashAttention = () => (
    <div className={`bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-lg ${className}`}>
      <div className="text-white space-y-2">
        <div className="text-xs font-mono mb-2">FlashAttention Memory Optimization</div>
        <div className="flex items-center justify-between text-xs">
          <div className="space-y-1">
            <div className="bg-white/20 px-2 py-1 rounded">SRAM (Fast)</div>
            <div className="bg-white/10 px-2 py-1 rounded">HBM (Slow)</div>
          </div>
          <div className="text-center">
            <div className="text-sm">2x</div>
            <div className="text-xs">Memory Efficient</div>
          </div>
        </div>
        <div className="bg-white/10 p-2 rounded text-xs font-mono">
          O(N) complexity vs O(N²)
        </div>
      </div>
    </div>
  )

  const renderMultiAgent = () => (
    <div className={`bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-lg ${className}`}>
      <div className="text-white space-y-2">
        <div className="text-xs font-mono mb-2">Multi-Agent LangGraph System</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-white/20 px-2 py-1 rounded text-center">Agent 1</div>
          <div className="bg-white/20 px-2 py-1 rounded text-center">Agent 2</div>
          <div className="bg-white/20 px-2 py-1 rounded text-center">Agent 3</div>
          <div className="bg-white/10 px-2 py-1 rounded text-center">Coordinator</div>
        </div>
        <div className="text-center text-sm">80% Automation</div>
      </div>
    </div>
  )

  const renderGemma = () => (
    <div className={`bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-lg ${className}`}>
      <div className="text-white space-y-2">
        <div className="text-xs font-mono mb-2">Gemma3-270M Architecture</div>
        <div className="space-y-1 text-xs">
          <div className="bg-white/20 px-2 py-1 rounded">Sliding Window Attention</div>
          <div className="bg-white/15 px-2 py-1 rounded">Pre-training from Scratch</div>
          <div className="bg-white/10 px-2 py-1 rounded">270M Parameters</div>
        </div>
      </div>
    </div>
  )

  const renderMoE = () => (
    <div className={`bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-lg ${className}`}>
      <div className="text-white space-y-2">
        <div className="text-xs font-mono mb-2">Mixture of Experts (JAX)</div>
        <div className="grid grid-cols-3 gap-1 text-xs">
          <div className="bg-white/20 px-1 py-1 rounded text-center">E1</div>
          <div className="bg-white/20 px-1 py-1 rounded text-center">E2</div>
          <div className="bg-white/20 px-1 py-1 rounded text-center">E3</div>
        </div>
        <div className="bg-white/10 px-2 py-1 rounded text-xs text-center">
          Top-K Routing
        </div>
      </div>
    </div>
  )

  const renderVERL = () => (
    <div className={`bg-gradient-to-br from-indigo-500 to-blue-600 p-4 rounded-lg ${className}`}>
      <div className="text-white space-y-2">
        <div className="text-xs font-mono mb-2">VERL Multi-turn RL</div>
        <div className="space-y-1 text-xs">
          <div className="bg-white/20 px-2 py-1 rounded">Distributed Training</div>
          <div className="bg-white/15 px-2 py-1 rounded">Multi-turn Optimization</div>
          <div className="bg-white/10 px-2 py-1 rounded">CUDA Generation</div>
        </div>
      </div>
    </div>
  )

  const renderDefault = () => (
    <div className={`bg-gradient-to-br from-gray-500 to-gray-600 p-4 rounded-lg ${className}`}>
      <div className="text-white space-y-2">
        <div className="text-xs font-mono mb-2">Technical Project</div>
        <div className="bg-white/20 px-2 py-1 rounded text-xs text-center">
          Deep Learning Implementation
        </div>
      </div>
    </div>
  )

  switch (type) {
    case 'flashattention':
      return renderFlashAttention()
    case 'multiagent':
      return renderMultiAgent()
    case 'gemma':
      return renderGemma()
    case 'moe':
      return renderMoE()
    case 'verl':
      return renderVERL()
    default:
      return renderDefault()
  }
}

export default ProjectVisual