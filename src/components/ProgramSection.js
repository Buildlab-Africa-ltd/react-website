import React from 'react'
import { Button } from './Button';
import './ProgramSection.css';

function ProgramSection() {

    return (
        <div className='program'>
            <h2>Our Programs</h2>
            <div className='program__box'>
                <div className='program_card'>
                      <h3>Africa Tech Internship Program</h3>
                      <p>An intensive project-based internship Program for tech talents from career tracks
                       like Product management, Product design and Software development to collaborate and build real products. During the program, 90% of the time will be
                       spent building practical and technical experience, while 10% of the time is dedicated to
                       personal development and soft skill training. Our career mentors will help interns to
                       access their professional aspirations, strengths, and weaknesses.</p>
                   
                    <div className='btn'>
                       <Button className='btn' buttonStyle='btn--primary'>Apply</Button>
                   </div>
                </div>

                <div className='program_card'>
                       <h3>Web3/Blockchain Talent Accelerator Program</h3>
                       <p>Be a part of the new wave, build amazing products backed up and built on blockchain
                       technology. We assemble, mentor, and upskill entry-level web3 tech talents to achieve
                       their career vision. We offer mentorship, internship, Hackathon, and job placement for
                       Web3 and Blockchain roles globally. We will assist you to build portfolio
                       of projects, build your network, and get you ready for the job in uprising technological market. </p>

                    <div className='btn'>
                       <Button buttonStyle='btn--primary'>Apply</Button>
                   </div>
                </div>

                <div className='program_card'>
                       <h3>Founders Fellowship Program</h3>
                       <p>Through our Founders Fellowship program (FFP) we help first-time founders and
                       innovators launch and build their product ideas to have a scalable and working MVP. We
                       test, validate, and build their products, and provide funding and mentorship to help them
                       scale and sustain their growth. We are able to leverage our network, experience, skills,
                       and market knowledge to provide the most relevant and applicable business solutions
                       to maximize organizational success.</p>

                    <div className='btn'>
                       <Button className='btn' buttonStyle='btn--primary'>Apply</Button>
                   </div>
                </div>
            </div>
        </div>
        
    )
      
  };
  
  export default ProgramSection
  
  
  