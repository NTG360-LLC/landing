import React from 'react'
import { motion } from 'framer-motion'

interface Application {
  id: string
  name: string
  description: string
  status: 'operational' | 'degraded' | 'outage'
  url: string
  category: 'services' | 'applications'
  environment: 'prod' | 'staging' | 'test' | 'dev'
}

interface ApplicationCardProps {
  application: Application
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ application }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500'
      case 'degraded':
        return 'bg-yellow-500'
      case 'outage':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational'
      case 'degraded':
        return 'Degraded'
      case 'outage':
        return 'Outage'
      default:
        return 'Unknown'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'services':
        return 'bg-blue-600'
      case 'applications':
        return 'bg-purple-600'
      default:
        return 'bg-gray-600'
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all duration-200 cursor-pointer"
      onClick={() => window.open(application.url, '_blank')}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 ${getCategoryColor(application.category)} rounded-lg flex items-center justify-center`}>
            <span className="text-white font-bold text-lg">
              {application.name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">{application.name}</h4>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 ${getStatusColor(application.status)} rounded-full`}></div>
              <span className="text-sm text-slate-400">{getStatusText(application.status)}</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-slate-500 bg-slate-700 px-2 py-1 rounded">
          {application.environment.toUpperCase()}
        </div>
      </div>
      
      <p className="text-slate-300 text-sm mb-4">
        {application.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">
          {application.category === 'services' ? 'Service' : 'Application'}
        </span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-primary-400 hover:text-primary-300 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ApplicationCard
