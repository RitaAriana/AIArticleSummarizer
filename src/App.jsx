import Hero from './components/Hero'
import Demo from './components/Demo'

import './App.css'

// main part of the application
const App = () => {
  return (
   <main>
        <div className="main">
            <div className="gradient" />
        
        </div>

        <div className="app">
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App