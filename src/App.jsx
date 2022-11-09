import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import  Headers  from './components/headers/Headers'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testtimonials from './components/testimonials/Testtimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {createContext, useState} from "react"

export const ThemeContext = createContext()

function App() {

  const [theme,setTheme] = useState("TH")

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <Headers/>
      <Nav/>
      <About/>
      <Experience />
      <Services />
      <Portfolio />
      <Testtimonials />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App