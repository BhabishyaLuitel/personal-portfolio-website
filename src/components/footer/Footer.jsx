/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {SiUpwork} from 'react-icons/si'
import {SiGmail} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JD</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://twitter.com/JDdahal" target="_blank"><AiOutlineTwitter/></a>
        <a href="https://www.upwork.com/freelancers/~01a3d59d908011415a" target="_blank"><SiUpwork/></a>
        <a href="mailto:jitandahal@gmail.com" target="_blank"><SiGmail/></a>

      </div>

      <div className='footer__copyright'>
        <small>Developed By Bhabishya</small>
      </div>
    </footer>
  )
}

export default Footer