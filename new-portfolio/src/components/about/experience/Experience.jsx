import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have </h5>
      <h2> My Experience</h2>

      <div className= "container experience__container">
        <div className = "experience__frontend">
          <h3>Frontend Development</h3>
          <div className=" experience__content">
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> HTML </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> CSS </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> REACT </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> Tailwind </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> Bootstrap </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> JavaScript </h4>
            </article>
          </div>
        </div>
{/* backend starts  */}
        <div className = "experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> Node.js </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> MongoDB </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> MySQL </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> SQLite </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> Python </h4>
            </article>
            <article className="experiece__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4> Django </h4>
            </article>

          </div>
          
        </div>

      </div>
    
    </section>
  )
}

export default Experience