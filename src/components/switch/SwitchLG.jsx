import React from 'react'
import { useContext} from "react"
import Switch from "react-switch"
import { ThemeContext } from '../../App'
import './SwitchLG.css'

const SwitchLG = () => {

    const {theme,setTheme} = useContext(ThemeContext)
    
      const toggleSwitch = (checked) => {
          setTheme(
              theme === "TH" ? "EN" : "TH"
          )
      }
  return (

      <div className="container switch__container">
        <div className={theme === "TH" ? "EN" : "TH"}>
          <div className='text1'>Language: {theme}</div>
                <Switch className='switch'
                    onChange = {toggleSwitch}
                    checked = {theme === "EN"}
                    uncheckedIcon={false}
                    checkedIcon = {false}
                    onColor = {'#4db5ff'}
                />
        </div> 
      </div>
  )
}

export default SwitchLG