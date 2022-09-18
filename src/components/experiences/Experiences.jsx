import React from 'react';
import './experiences.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experiences = () => {
  return (
    <section id='experiences'>
      <h5>My skills</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Intermediate</small>
              </div>              
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>RxJs</h4>
                <small className='text-light'>Intermediate</small>
              </div>              
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NjRx</h4>
                <small className='text-light'>Intermediate</small>
              </div>              
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Angular Material</h4>
                <small className='text-light'>Intermediate</small>
              </div>              
            </article>
            <article className="experience__details">             
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>              
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Css</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>              
            </article>
          </div>

        </div>
        
        <div className="experience__backend"> 
        
          <h3>Back-end development</h3>
          <div className="experience__content">
            <article className="experience__details">
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>JAVA</h4>
                  <small className='text-light'>Basic</small>
                </div>                
            </article>
          </div>
         
        </div>

      </div>

    </section>
  )
}
export default Experiences