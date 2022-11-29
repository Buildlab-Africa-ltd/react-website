import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                Join our newsletter
                </p>
                <p className="footer-subscription-text">
                An Internship that has your back.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>

            <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Products</h2>
            <Link to='/'>Overview</Link>
            <Link to='/'>Features</Link>
            <Link to='/'>Solutions</Link>
            <Link to='/'>Tutorials</Link>
            <Link to='/'>Pricing</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Company</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>News</Link>
            <Link to='/'>Releases</Link>
            <Link to='/'>Terms and Conditions</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Resources</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Events</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Enterprise</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Use Cases</h2>
            <Link to='/'>Startups</Link>
            <Link to='/'>Enterprise</Link>
            <Link to='/'>Government</Link>
            <Link to='/'>SaaS</Link>
            <Link to='/'>E-Commerce</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="/images/Logo.png.png" alt="logo" />
            </Link>
          </div>
          <small class='website-rights'>Copyright ©2022 BuildLab. All Rights Reserved.</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              href='https://www.instagram.com/buildlab.africa/'
              target='_instagram'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to=''
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
        


export default Footer