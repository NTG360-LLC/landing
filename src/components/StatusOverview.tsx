import React from 'react'
import { motion } from 'framer-motion'

const StatusOverview: React.FC = () => {
  const stats = [
    {
      label: 'Total Applications',
      value: '9',
      status: 'operational',
      description: 'All systems running'
    },
    {
      label: 'Services Online',
      value: '5',
      status: 'operational',
      description: 'Core services active'
    },
    {
      label: 'Uptime',
      value: '99.9%',
      status: 'operational',
      description: 'Last 30 days'
    },
    {
      label: 'Response Time',
      value: '< 200ms',
      status: 'operational',
      description: 'Average response'
    }
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">System Status</h2>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-medium">All Systems Operational</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-slate-300 font-medium mb-1">{stat.label}</div>
            <div className="text-sm text-slate-400">{stat.description}</div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-700">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">Last updated: {new Date().toLocaleString()}</span>
          <a 
            href="#" 
            className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
          >
            View detailed status →
          </a>
        </div>
      </div>
    </div>
  )
}

export default StatusOverview
