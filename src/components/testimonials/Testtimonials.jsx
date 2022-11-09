import React from 'react'
import './Testtimonials.css'
import database from './database'
import { useContext} from "react"
import { ThemeContext } from '../../App'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testtimonials = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <section id='testtimonails'>
      <h5>{theme === "TH" ? "รีวิวจากลูกค้า" : "Review from clients"}</h5>
      <h2>{theme === "TH" ? "การันตีด้านผลงานจากลูกค้า" : "Testimonials"}</h2>

      <Swiper pagination={{ clickable:true, }} modules={[Pagination]} spaceBetween={30} className="container Testtimonials__container">
        {
          database.map(({avatar, name, reviwe},index)=>{
            return(
              <SwiperSlide key={index} className="Testtimonials">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__reviwe">{reviwe}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testtimonials
