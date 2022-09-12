import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experiences />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />

    </div>
  )
}
