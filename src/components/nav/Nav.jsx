/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome,AiOutlineUser } from 'react-icons/ai'
import { BiStar,BiMessageDetail } from 'react-icons/bi'
import { RiFolder2Line } from 'react-icons/ri'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BiStar/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}><RiFolder2Line/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav