import React from 'react';
import classes from './Aboutus.module.css';

const Aboutus = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>about us</h1>
      <p className={classes.text}>
        Suvidha Shiksha, under the banner of Suvidha Mahila Mandal (Founded On -
        08/09/1995) is an NGO registered under the Society Act of 1860 aims to
        provide a wide array of free online courses for students from all walks
        of life, helping them to achieve their goals. We strongly believe in the
        importance of educational equity and the need to uplift everyone by
        providing free access to high-quality learning platforms. We also
        provide opportunities for dedicated teachers to design courses for
        students and teach them. We welcome all students who want to quench
        their thirst for learning and committed mentors to extend their helping
        hands to impart high quality education in our society.
      </p>
    </div>
  );
};

export default Aboutus;
