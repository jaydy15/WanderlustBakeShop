import React from 'react';
import Product from './../components/Product';
import cookies from './../images/COOKIES.jpg';
import brownies from '../images/image00022.jpeg';
import creampuff from '../images/puff nation.png';
import granola from '../images/6.jpg';

const OurProducts = () => {
  return (
    <div className='container'>
      <h2 className='text-center display-4'>Our Products</h2>
      <div className='row my-5'>
        <div className='col-sm'>
          <Product title='Brwonies' image={brownies} />
        </div>
        <div className='col-sm'>
          <Product title='Cookies' image={cookies} />
        </div>
      </div>

      <div className='row my-5'>
        <div className='col-sm'>
          <Product title='Cream Puffs' image={creampuff} />
        </div>
        <div className='col-sm'>
          <Product title='Granola' image={granola} />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
