import React from 'react';

const Card = ({ icon, text, link }) => {
  return (
    <div className='col-sm-6'>
      <div className='card text-center'>
        <div className='card-body'>
          <h5 className='card-title'>{text}</h5>
          <p className='card-text'>
            <a href={link}>
              <i className={icon}></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
