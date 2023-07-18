import React from 'react'
import Home from './components/Home'
import './App.css'
import Projects from './components/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also load CSS styles from CDN

function App() {

  AOS.init();

  return (

    <>
    <Home />
    <Projects />
    </>
  )
}

export default App;