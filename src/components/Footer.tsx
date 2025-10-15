import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-white font-bold">NTG360</span>
            </div>
            <p className="text-slate-400 text-sm">
              Unified enterprise platform for modern workflows.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Applications</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">AutomatiQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Axis</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Auris</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">GenomiQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 NTG360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
