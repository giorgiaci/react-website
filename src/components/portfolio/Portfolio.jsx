import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/b&bdarre.png';
import IMG2 from '../../assets/southsideweb.png';
import IMG3 from '../../assets/giorgiaci.github.png';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'First project',
    github:'https://github.com',
    demo:'https://www.palermobbdarre.it/'
  },
  {
    id:1,
    image: IMG2,
    title: 'Second project',
    github:'https://github.com',
    demo:'https://southside-web.com'
  },
  {
    id:1,
    image: IMG3,
    title: 'Third project',
    github:'https://github.com',
    demo:'https://giorgiaci.github.io//'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

      {
        data.map(({id, image, title, github, demo}) =>{
          return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">Github</a>
                <a href={demo} className="btn btn-primary" target='_blank'>LiveDemo</a>
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