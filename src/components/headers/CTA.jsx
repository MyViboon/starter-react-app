import React from 'react'
import CV from '../../assets/cv.pdf'

import { useContext} from "react"
import { ThemeContext } from '../../App'


const CTA = () => {
  
  const {theme} = useContext(ThemeContext)

  return (
    <div className='cta'>
        <a href={CV} download className='btn'>{theme === "TH" ? "ดาวโหลด CV" : "Download CV"}</a>
        <a href="#contact" className='btn btn-primary'>{theme === "TH" ? "มาคุยกันครับ" : "Let's Talk"}</a>
    </div>
  )
}

export default CTA