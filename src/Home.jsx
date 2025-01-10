import React from 'react'
import Nav from './pages/Nav.jsx'
import Header from './pages/Header.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import WhyUs from './pages/WhyUs.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'

function Home() {
  return (
    <div>
        <Nav/>
        <Header/>
        <About/>
        <Projects/>
        <WhyUs/>
        <Contact/>
        <Footer/>
        </div>
  )
}

export default Home