/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Portfolio.css'
import database from './database.js'
import { useContext} from "react"
import { ThemeContext } from '../../App'

const Portfolio = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <section id='portfolio'>
      <h5>{theme === "TH" ? "ผลงานล่าสุดของผม" : "My Recent Work"}</h5>
      <h2>{theme === "TH" ? "ด้านผลงาน" : "Portfolio"}</h2>

    <div className="container portfolio__container">
      {
        database.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target={'_blank'}>Github</a>
                  <a href={demo} className='btn btn-primary' target={'_blank'}>{theme === "TH" ? "ดูตัวอย่าง" : "Live Demo"}</a>
                </div> 
              </article>
            )
          })
      }
    </div>
    </section>
  )
}

export default Portfolio