import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'
import IMG7 from '../../assets/portfolio7.jpeg'
import IMG8 from '../../assets/portfolio8.jpeg'
import IMG9 from '../../assets/portfolio9.jpeg'
import IMG10 from '../../assets/portfolio10.jpeg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          </div>
          <img src={IMG1} alt="" />
          <a href=""></a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          </div>
          <img src={IMG2} alt="" />
          <a href=""></a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          </div>
          <img src={IMG3} alt="" />
          <a href=""></a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          </div>
          <img src={IMG4} alt="" />
          <a href=""></a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          </div>
          <img src={IMG5} alt="" />
          <a href=""></a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          </div>
          <img src={IMG6} alt="" />
          <a href=""></a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          </div>
          <img src={IMG7} alt="" />
          <a href=""></a>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          </div>
          <img src={IMG9} alt="" />
          <a href=""></a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          </div>
          <img src={IMG10} alt="" />
          <a href=""></a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          
          <img src={IMG8} alt="" />
          </div>
          <a href=""></a>
        </article>
      </div>


    </section>
  )
}

export default Portfolio