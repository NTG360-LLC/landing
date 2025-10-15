import React from 'react'
import { motion } from 'framer-motion'
import ApplicationGrid from '../components/ApplicationGrid'
import StatusOverview from '../components/StatusOverview'

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to <span className="text-primary-400">NTG360</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Your unified enterprise platform for accessing all applications and services. 
          Streamlined, secure, and designed for modern workflows.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </motion.button>
        </div>
      </motion.section>

      {/* Status Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <StatusOverview />
      </motion.section>

      {/* Applications Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Applications</h2>
          <p className="text-slate-300">
            Access all your enterprise applications from a single, unified interface.
          </p>
        </div>
        <ApplicationGrid />
      </motion.section>
    </div>
  )
}

export default LandingPage
