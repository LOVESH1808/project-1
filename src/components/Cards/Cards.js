import React from "react";
import Card from "./Card";
import CardData from "./CardData.js";

const Cards = () => {
    return (<>
        <div className="home-cards">
            <Card details={CardData} />
        </div>
    </>);
};

export default Cards;