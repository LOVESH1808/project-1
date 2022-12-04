import React from 'react';
import classes from './Footer.module.css';
import { IoIosCall } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import { AiFillLinkedin } from 'react-icons/ai';
import logo from '../../assedic/WhatsApp Image 2022-12-01 at 13.30.55.jpg';
const Footer = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>contact us</h1>
      <div className={classes.footer}>
        <div className={classes.iconcontainer}>
          <div className={classes.icon}>
            <IoIosCall />
            <IoMdMail />
            <AiFillLinkedin />
          </div>
          <div className={classes.text}>
            <p>TEXT</p>
            <p>TEXT </p>
            <p>TEXT</p>
          </div>
        </div>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
