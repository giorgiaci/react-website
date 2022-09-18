import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi';

const Services = () =>{
  return (
    <section id='services'>
      <h5>What I did</h5>
      <h2>Works Experiences</h2>
      <div className="container service__container">       
        
        <article className="service">
          <div className="service__head">
            <h3>ANGULAR WEB DEVELOPER - ENGINEERING S.P.A., Rome (IT) </h3>
          </div>
          <ul className="service__list">            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create components, directives, decorators, and services to interface with <b>restful API’s</b></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Improve performance of Angular applications by using <b>RxJs</b></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing data through the react state manager <b>NgRx</b></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience in <b>Agile</b> development methodologies including Scrum </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaborating closely with other members of the engineering 
                team to ensure timely delivery of high-quality software products. </p>
            </li>

          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT SECTION*/}


        <article className="service">
          <div className="service__head">
            <h3>FREELANCE WEB DEVELOPER – B&B DARRÈ, Palermo (IT) </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Built and customize a <b>WordPress</b> based website, including theme and site structure implementation,
                plugin selection and management </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Populate contents such as text, links, images, embed videos, and audio </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customize the client chosen theme by implementing the default <b>PHP</b> code of single pages  </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Uploading contents by the FTP client <b>FILEZILLA</b></p>
            </li>            
          </ul>
        </article>
        {/*END OF UI SECTION*/}

        <article className="service">
          <div className="service__head">
            <h3>WEB CONTENT CREATOR - IOSTUDIO NEWS, Palermo(IT)</h3>
          </div>         

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interviewing people in a range of different circumstances</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Building contacts in many areas to maintain a flow of news</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Attending a range of events like university meetings.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating and uploading news content for the newspaper website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Publishing content by using the CMS WordPress.</p>
            </li>
          </ul>
        </article>
        {/*END OF content creation SECTION*/}
      </div>
    </section>
  )
}

export default Services