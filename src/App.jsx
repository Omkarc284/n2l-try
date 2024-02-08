import { useRef } from 'react'

import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import About2 from './components/About2'
import Contact from './components/Contact'


function App() {
  const resultRef = useRef(null);

  return (
    <>
      <Navbar resultRef={resultRef}/>
      <Home />
      <About />
      <About2 />
      <Contact ref={useRef}/>
    </>
  )
}

export default App
