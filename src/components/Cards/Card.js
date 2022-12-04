import React from "react";
import './Card.css'

const Card = (props) => {
    return (
        <>

            <div className="card-parent">
                <h1 className="cards-heading">THE NEW AGE CANVAS FOR KIDS</h1>
            </div>
            {props.details.map((value, index) => (
                <div className="card" key={index}>
                    <div className="col-md-4 col-sm-6">
                        <div>
                            <h3 className="card-logo">{value.logo}</h3>
                        </div>
                        <div>
                            <h4 className="card-title">{value.title}</h4>
                            <p className="card-description">{value.description}</p>
                        </div>
                    </div>
                </div>


            ))};
        </>
    );
};

export default Card;