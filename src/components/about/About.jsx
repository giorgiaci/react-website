import React from 'react'
import './about.css'
import Me from '../../assets/giorgia_ciulla.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={Me} alt="me" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+</small>
            </article>
          </div>

          <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            Lorem ipsumLorem ipsumLorem ipsum
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About