
import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Collaborate and Build real-world products with other tech Talents.</h1>
      <p>Get Internship Placement and Hands-on Experience. Build your portfolio, experience, and
        mentorship by industry experts and leaders, meet a community of passionate tech
        talent builders and accelerate your career in tech.
        Succeed in tech.</p>

        <div className='hero-btn'>
          <Button className='btn' buttonStyle='btn--primary'>Apply</Button>
          </div>
    </div>
  )
}

export default HeroSection



