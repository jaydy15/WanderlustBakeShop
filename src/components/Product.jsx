import React from 'react';

const Product = ({ image, title }) => {
  return (
    <div>
      <div className='card' style={{ width: '100%' }}>
        <img
          className='card-img-top'
          src={image}
          alt='Card image cap'
          style={{
            width: '100%',
            height: '30vw',
          }}
        />
        <div className='card-body'>
          <p className='card-text text-center'>{title.toUpperCase()}</p>{' '}
        </div>
      </div>
    </div>
  );
};

export default Product;
