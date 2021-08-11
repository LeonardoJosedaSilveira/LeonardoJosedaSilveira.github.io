import React from 'react';
import { githubImg, instagram, linkedin } from '../Assets'

export default function Footer() {
  return (
    <div className='Footer'>
      {/* <a href='https://www.menti.com/' alt='project'> */}
      <a href='https://www.linkedin.com/in/leonardojosedasilveira/' >
        <img src={ linkedin } alt='linkedin' className='FooterItem' />
      </a>
      {/* <a href='https://www.menti.com/' alt='project'> */}
      <a href='https://github.com/LeonardoJosedaSilveira'>
        <img src={ githubImg } alt='gihub' className='FooterItem' />
      </a>
      {/* <a href='https://www.menti.com/' alt='project'> */}
      <a href='https://www.instagram.com/leonardojosedasilveira/'>
        <img src={ instagram } alt='instagram' className='FooterItem' />
      </a>
    </div>
  )
}
