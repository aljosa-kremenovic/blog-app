import React from 'react';
import styles from './Hero.module.css';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';


const Hero = () => {
  return (
    <div className={styles.hero}>
        <Navbar />
        <h1>Hello from Hero</h1>
        <Button />
    </div>
  );
}

export default Hero;
