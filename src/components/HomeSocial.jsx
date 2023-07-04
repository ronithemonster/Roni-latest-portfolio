import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter,  } from 'react-icons/bs';

const HomeSocial = () => {
    return (
        <div className='mt-8 flex'>
            <p className='mr-3 text-blue-500'><a  href="https://www.facebook.com/randyroni"> <BsFacebook /></a></p>
            <p className='mr-3 text-blue-500'><a href="https://twitter.com/ashadul_15"> <BsTwitter /></a> </p>
            <p className='mb-3 text-blue-500'><a href="https://www.linkedin.com/in/ai-roni-061a7327b/"> <BsLinkedin /></a> </p>
        </div>
    );
};

export default HomeSocial;