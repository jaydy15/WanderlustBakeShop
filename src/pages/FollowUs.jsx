import React from 'react';
import Card from '../components/Card';

const FollowUs = () => {
  return (
    <div className='container-fluid'>
      <h3 className='display-4 text-center'>Follow Us on our Social Media</h3>
      <div className='row'>
        <Card
          text='Facebook'
          icon='fa fa-facebook-official fa-5x'
          link='https://www.facebook.com/WanderlustBakeshop'
        />
        <Card
          text='Instagram'
          icon='fa fa-instagram fa-5x'
          link='https://www.instagram.com/wanderlust_bakeshop/?hl=en'
        />
      </div>
    </div>
  );
};

export default FollowUs;
