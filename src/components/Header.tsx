import React from 'react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">NTG360</h1>
              <p className="text-sm text-slate-400">Enterprise Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-slate-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="/applications" className="text-slate-300 hover:text-white transition-colors">
              Applications
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Support
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>All Systems Operational</span>
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
