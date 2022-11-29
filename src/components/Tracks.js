import React from 'react';
import './Tracks.css';
import TracksItem from './TracksItem';


function Tracks() {
  return (
    <div className='tracks'>
      <h2>Internship Tracks</h2>
      <div className='tracks__container'>
        <div className='tracks__wrapper'>
        
          <ul className='tracks__items'>
            <TracksItem
              src='/images/productdes.jpg'
              text='Build user friendly products, 
              understand what User experience really entails,have your product live and in the hands of users.'
              label='Product Design' 
              path='/services'
              button='Apply'  
            />
            <TracksItem
              src='/images/productman.avif'
              text='Get the feel of what it takes to lead a team, come up with
              PRD and carrying out user research and building a functional product.'
              label='Product Management'
              path='/services'
              button='Apply'
              />
               <TracksItem
              src='/images/frontend.avif'
              text='Become a proactive frontend developer, go beyond the codes by
              working with a team of developers bringing products to life.'
              label='Frontend Development'
              path='/services'
              button='Apply'
              />
              <TracksItem
              src='/images/backend.jpg'
              text='Become a proactive backend developer, go beyond the codes by
              working with a team of developers bringing products to life.'
              label='Backend Development'
              path='/services'
              button='Apply'
              />
          </ul>
          <ul className='tracks__items'>
            <TracksItem
              src='/images/fullstack.avif'
              text='Become a proactive fullstack developer, go beyond the codes by
              working with a team of developers bringing products to life.'
              label='Fullstack Development'
              path='/services'
              button='Apply'
            />
            <TracksItem
              src='/images/copywriting.jpg'
              text='Understand the rudiments of UX writing, create copies that
              converts users to paying clients, create engagement and retentions that ranks product in SEO search.'
              label='Copy Writing'
              path='/services'
              button='Apply'
            />
            <TracksItem
              src='/images/dataanalysis.jpg'
              text='Become a proactive data analyst, go beyond the codes by
              working with a team of developers bringing products to life.'
              label='Data Analysis'
              path='/services'
              button='Coming!!!'
            />
            <TracksItem
              src='/images/productmar.jpg'
              text='Become a proactive product marketer, go beyond the codes by
              working with a team of developers bringing products to life.'
              label='Product Marketing'
              path='/services'
              button='Coming!!!'
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tracks;