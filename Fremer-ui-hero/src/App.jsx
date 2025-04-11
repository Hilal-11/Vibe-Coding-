import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import './components/components.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <br /><br />
      <Hero />
      <Projects />
    </div>
  )
}

export default App
