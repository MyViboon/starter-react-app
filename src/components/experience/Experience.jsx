import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useContext} from "react"
import { ThemeContext } from '../../App'

const Experience = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <section id="experience">
      <h5>{theme === "TH" ? "ความสามารถที่ผมมี" : "What Skills I have"}</h5>
      <h2>{theme === "TH" ? "ความสามารถทางด้านโปรแกรม" : "My Experiences"}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END Of FrontEnd */}

        <div className="experience__backtend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Mong DB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* End Of Backend */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
