import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ApplicationGrid from './components/ApplicationGrid'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/applications" element={<ApplicationGrid />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
