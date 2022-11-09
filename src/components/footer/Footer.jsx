/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import { FaFacebookF,FaInstagram } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">VIBOON</a>

      <ul className="permaillink">
        <li><a href="#">HOME</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="service">Services</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="testtimonails">Testimonails</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/li.dxngpu"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2022 Viboon Parnkaew All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer