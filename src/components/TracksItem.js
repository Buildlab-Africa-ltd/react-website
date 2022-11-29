import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';

function TracksItem(props) {
  return (
    <>
      <li className='tracks__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='tracks__item__pic-wrap' data-category={props.label}>
            <img
              className='tracks__item__img'
              alt='Tracks'
              src={props.src}
            />
          </figure>
           
          <div className='tracks__item__info'>
            <h5 className='tracks__item__text'>{props.text}</h5>
          </div>

          <div className='btn'>
          <Button className='btn' buttonStyle='btn--primary'>{props.button}</Button>
          </div>
          </Link>
      </li>
    </>
  )
}

export default TracksItem
