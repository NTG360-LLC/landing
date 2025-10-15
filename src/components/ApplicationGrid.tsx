import React from 'react'
import { motion } from 'framer-motion'
import ApplicationCard from './ApplicationCard'

interface Application {
  id: string
  name: string
  description: string
  status: 'operational' | 'degraded' | 'outage'
  url: string
  category: 'services' | 'applications'
  environment: 'prod' | 'staging' | 'test' | 'dev'
}

const applications: Application[] = [
  // Services
  {
    id: 'automatiq',
    name: 'AutomatiQ',
    description: 'Automation and workflow management platform',
    status: 'operational',
    url: 'https://automatiq.ntg360.com',
    category: 'services',
    environment: 'prod'
  },
  {
    id: 'genomiq',
    name: 'GenomiQ',
    description: 'Genomic data analysis and processing',
    status: 'operational',
    url: 'https://genomiq.ntg360.com',
    category: 'services',
    environment: 'prod'
  },
  {
    id: 'fabriq',
    name: 'FabriQ',
    description: 'Manufacturing and production management',
    status: 'operational',
    url: 'https://fabriq.ntg360.com',
    category: 'services',
    environment: 'prod'
  },
  {
    id: 'synaptiq',
    name: 'SynaptiQ',
    description: 'Neural network and AI processing',
    status: 'operational',
    url: 'https://synaptiq.ntg360.com',
    category: 'services',
    environment: 'prod'
  },
  {
    id: 'genetiq',
    name: 'GenetiQ',
    description: 'Genetic analysis and research tools',
    status: 'operational',
    url: 'https://genetiq.ntg360.com',
    category: 'services',
    environment: 'prod'
  },
  
  // Applications
  {
    id: 'axis',
    name: 'Axis',
    description: 'Data visualization and analytics platform',
    status: 'operational',
    url: 'https://axis.ntg360.com',
    category: 'applications',
    environment: 'prod'
  },
  {
    id: 'auris',
    name: 'Auris',
    description: 'Audio processing and analysis tools',
    status: 'operational',
    url: 'https://auris.ntg360.com',
    category: 'applications',
    environment: 'prod'
  },
  {
    id: 'programmatiq',
    name: 'ProgrammatiQ',
    description: 'Code generation and automation tools',
    status: 'operational',
    url: 'https://programmatiq.ntg360.com',
    category: 'applications',
    environment: 'prod'
  },
  {
    id: 'admin',
    name: 'Admin',
    description: 'System administration and management',
    status: 'operational',
    url: 'https://admin.ntg360.com',
    category: 'applications',
    environment: 'prod'
  }
]

const ApplicationGrid: React.FC = () => {
  const services = applications.filter(app => app.category === 'services')
  const apps = applications.filter(app => app.category === 'applications')

  return (
    <div className="space-y-12">
      {/* Services Section */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ApplicationCard application={app} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Applications Section */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + services.length) * 0.1 }}
            >
              <ApplicationCard application={app} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ApplicationGrid
