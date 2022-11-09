import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me4.png'
import HeaderSocial from './HeaderSocial'
import './Headers.css'
import ReactTypingEffect from 'react-typing-effect';

import { useContext} from "react"
import Switch from "react-switch"
import { ThemeContext } from '../../App'

const Headers = () => {

  const {theme,setTheme} = useContext(ThemeContext)
    
      const toggleSwitch = (checked) => {
          setTheme(
              theme === "TH" ? "EN" : "TH"
          )
      }

  return (
    <header>
      <div className='check'>
          <div>Location  : {theme}</div>
           <div>
             <Switch
                    onChange = {toggleSwitch}
                    checked = {theme === "EN"}
                    uncheckedIcon={false}
                    checkedIcon = {false}
                    onColor = {'#4db5ff'}
                    offColor = {'#234963'}
                />
            </div>    
        </div> 
      <div className="container header__container">
        <h2>{theme === "TH" ? "สวัสดีครับ ผมชื่อ!" : "Hello I,m"}</h2> 
        <ReactTypingEffect text={theme === "TH" ? ['นาย วิบูลย์ ปานแก้ว'] : ['VIBOON PARNKAEW']} speed={80} eraseDelay={200} className="typingEffect"/>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Headers
