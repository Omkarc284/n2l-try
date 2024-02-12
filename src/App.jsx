
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import About2 from './components/About2'
import Contact from './components/Contact'


function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      <About />
      <About2 />
      <Contact />
    </div>
  )
}

export default App
