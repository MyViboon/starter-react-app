import React from 'react'
import './About.css'
import ME from "../../assets/me2.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscNewFolder} from 'react-icons/vsc'
import { useContext} from "react"
import { ThemeContext } from '../../App'

const About = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <section id='about'>
      <h5>{theme === "TH" ? "มาทำความรู้จักกัน" : "Get to Know"}</h5>
      <h2>{theme === "TH" ? "เกี่ยวกับตัวผม" : "About Me"}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h3>{theme === "TH" ? "ประสบการณ์" : "Experience"}</h3>
              <small>{theme === "TH" ? "มากกว่า 3 ปี" : "3+ Year"}</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h3>{theme === "TH" ? "ลูกค้าเรา" : "Clients"}</h3>
              <small>{theme === "TH" ? "มากกว่า 200 คน ทั่วโลก" : "200+ Wolrdwide"}</small>
            </article>

            <article className="about__card">
              <VscNewFolder className='about__icon'/>
              <h3>{theme === "TH" ? "ผลงาน" : "Project"}</h3>
              <small>{theme === "TH" ? "มากกว่า 80 ชิ้น" : "80+ Completed"}</small>
            </article>
          </div>
          <p>
          {theme === "TH" ? 
          "ม้านั่งรันเวย์พลาซ่าติ่มซำ เวอร์ดยุค น็อกเชฟยากูซ่าคอรัปชันออยล์ มินต์แบรนด์บริกรอินเตอร์ตังค์ เนิร์สเซอรี่เพลย์บอยเลดี้บึมบัตเตอร์ เคลียร์เยลลี่เพนตากอนป๋าซี้ มยุราภิรมย์ดีมานด์อุปทานสไตล์ไนน์ แดนซ์มอนสเตอร์ตัวเอง เมเปิลไฮบริดแอนด์แหม็บอิออน แคชเชียร์แกสโซฮอล์วาไรตี้ เก๋ากี้สเต็ปเอ๋อเฝอ แฟ็กซ์รุมบ้าว้อดก้า เทคจิตเภทเอ็นจีโอ แม่ค้าแอดมิชชั่นไฮแจ็คอีแต๋นเดี้ยง ตี๋สป็อต รีดไถวัคค์เอ็นจีโอชินบัญชร" 
          
          : 

          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum harum, ab magnam beatae laudantium, molestiae voluptas aliquam tempore nostrum sint quaerat, repellendus eaque debitis doloribus. Ipsum veritatis similique corrupti iusto?"}
              
          </p>

            <a href="#contact" className='btn btn-primary'>{theme === "TH" ? "ร่วมพูดคุย" : "Let's Talk"}</a>
        </div>
      </div>  
    </section>
  )
}

export default About