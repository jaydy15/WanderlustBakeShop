import React from 'react';
import image from '../images/Tagline.jpg';
const AboutUs = () => {
  return (
    <div className='container'>
      <h2 className='text-center display-4'>About Us</h2>
      <div className='row h-100'>
        <div className='col'>
          <img
            src={image}
            alt=''
            style={{
              backgroundPosition: 'center',
              width: '100%',
              height: '15vw',
            }}
          />
        </div>
        <div className='col-sm'>
          <p className='text-center py-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus aperiam, repudiandae aut eum ducimus exercitationem,
            odit omnis debitis eaque doloremque, sequi dicta sapiente error
            magni? Rerum nemo quidem voluptatum eos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
