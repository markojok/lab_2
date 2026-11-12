import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="cv">
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default App
