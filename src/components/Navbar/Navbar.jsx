import React from 'react';
import classes from './Navbar.module.css';


export default function Navbar() {
  return (
    <>
      <nav className={classes.navbar}>
        {/* logo */}
        <div className={classes.logocontainer}>
            <img src={require('../../assedic/slogo_footer.png')} alt="logo" className={classes.logo} />
        </div>
        {/* list */}
        <div className={classes.menulist}>
            <ul className={classes.items}>
                <li className={classes.item}>PROGRAMS</li>
                <li className={classes.item}>TESTIMONIAL</li>
                <li className={classes.item}><a href={require('../Aboutus/Aboutus')} className={classes.link}>ABOUT US</a></li>
            </ul>
        </div>
      </nav>
    </>
  )
}
