import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <a
              className='social-icon-link email'
              href='mailto:operations@patchrobowars.com'
              aria-label='Email'
            >
              <i className='fas fa-envelope' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/patchrobowars'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
          </div>
          <small className='website-rights'>Patch Robowars © 2024</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
