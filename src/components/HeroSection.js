import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>PATCH ROBOWARS</h1>
      <p></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          REGISTER YOUR INTEREST
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
