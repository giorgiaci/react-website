import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TiSocialDribbbleCircular} from 'react-icons/ti'

const HeaderSocial = () => {

  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href='https://dribble.com' target="_blank" rel="noopener noreferrer"><TiSocialDribbbleCircular /></a>
    </div>
  )
}

export default HeaderSocial