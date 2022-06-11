import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Engineering</h3>
          </div>
        <ul className='service__list'>
        <li>
            <BiCheck className='service__list-icon'/>
            <p>Estimation</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Floor Plan Design</p>
          </li>
        <li>
            <BiCheck className='service__list-icon'/>
            <p>Drawing</p>
          </li>
        <li>
            <BiCheck className='service__list-icon'/>
            <p>2D/3D Modeling </p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Surveying</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Designing</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Supervise</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Construction</p>
          </li>
     

        </ul>
        </article>
        {/* <article className='service'>
          <div className='service__head'>
            <h3></h3>
          </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          
        </ul>
        </article> */}

        <article className='service'>
          <div className='service__head'>
            <h3>Maps</h3>
          </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Political</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Physical</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Topographic</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Road</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Real Estate</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Tourist</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Cycling</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Regional</p>
          </li>
          
          
        </ul>
        </article>

      </div>
    </section>
  )
}

export default Services