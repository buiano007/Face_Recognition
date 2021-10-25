import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';
const Logo = () => {
  return (
    <div className='ma4 mt0'>
   <Tilt className="Tilt">
     <div className="Tilt-inner"> 
     <img className="brain" style={{paddingTop: '0'}} alt='logo' src={brain}/>
     </div>
   </Tilt>
      
    </div>
  );
}

export default Logo;