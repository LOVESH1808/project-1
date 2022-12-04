import React from "react";
import './Testimonial.css'
import payal from './payal.jpeg';
import shobha from './shobha.jpeg';

const Testomonial = ()=>{
    return (
        <>
            <section className="testimonial">
                <h1>TESTOMONIAL</h1>
                
                <div className="parent-card1">
                    <div className="heading">
                        <h2>Message From Our President</h2>
                    </div>
                    <div className="card1">
                        <div className="card1-desc">
                            
                            <p>Our programmes are curated to encourage innovation and to teach exceptional approach because no problem is identical. No child is born equal but can certainly aspire to be one because we believe once we inspire one, the inspiration can motivate all to dream beyond the barriers of finance and help build a better, brighter society ahead for everyone.<br /><br />To realize this vision, the children need you. They need your contribution to make a real change and you can contribute to bring that change now.<br /><br />Donate for the cause you truly care.
                            </p>
                        </div>
                        <div className="card1-img">
                            <img src={payal} alt="" />
                            <p>“We make a living by what we get.<br/>We make a life by what we give.”</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2  className="desc-heading">Message From Our Secretary</h2>
                    </div>
                    <div className="card2">
                        <div className="card2-desc">
                            
                            <p>Donations from wildly respectful, generous, and big-hearted people like you make me keep doing what I’m doing. You are the fuel to my fire, and I could not be more grateful than I am for you now in this moment.With each donation we receive, we become all that much closer to our goal. Thank you for making a difference through your compassion and generosity.<br /><br />Thank you so much for your volunteering support for our foundation. Your work ethic was fantastic and everyone at the office commends your enthusiasm for the cause.<br /><br />Donate for the cause you truly care.
    
                            </p>
                        </div>
                        <div className="card2-img">
                            <p>“Those who are happiest are those<br />who do the most for others”</p>
                            <img src={shobha} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testomonial;