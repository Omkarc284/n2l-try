import { useState } from 'react'

import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import About2 from './components/About2'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <About2 />
      <Contact />
    </>
  )
}

export default App
