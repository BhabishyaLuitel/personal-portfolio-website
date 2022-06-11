import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>7+ Years Working</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Clients</h5>
              <small>80+ clients all over the World</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Projects</h5>
              <small>200+ projects completed</small>
            </article>
            

          </div>
          <p>
          I'm an engineer, GIS Specialist, and Graphics designer. My area of expertise includes plans, conceptual designing, CAD documentation, cartography, landscape designing, planning, web maps, 3D modeling for design analysis and visualization.
          </p>
          <p>I use ArcGIS, QGIS, Erdas Imagine, Adobe Suite with Mapublisher, Autodesk AutoCAD, Sketchup V-Ray. I offer visual solutions through a unique approach which turns out to be a fusion of my technical skills of Mapping and Graphics.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about