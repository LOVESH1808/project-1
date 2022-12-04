import React from "react";
import './Hero.css'
import Homepic from './homepic.png'

const Hero = () => {
    return (
        <>
            <div class="hero">
                <div class="hero-left">
                    <h2>CODING BOOTCAMP FOR KIDS</h2>
                    <span className="desc1">Brought to you by<a href="https://www.suvidhafoundationedutech.org/"> <br />Suvidha Foundation</a></span>
                    <div><form action="https://www.google.com"><button className="desc3"><strong>REGISTER TODAY AND, <br />BOOK A FREE DEMO SESSION</strong></button></form></div>
                    <span className="desc4">CODING IS THE NEW LITERACY</span>
                    <span className="desc5">According to a research from NASA, the kids creativity is at its peak during this age i.e 6-16. “NOW” is the perfect time to introduce your kid to the coding culture .
                    </span>
                </div>
                <div class="hero-right">
                    <img src={Homepic} alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero;