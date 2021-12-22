import React, { useState } from "react";


// adding comment
const Card = (props) => {
    const { key, title, bgcolor, msgfont, message, msgcolor, creator, cardType } = props;
    const [favorited, setFavorited] = useState("");
    
    const onClick = () => {
        setFavorited(!favorited)
        // placeholder for favorited endpoint
    }


    return (
        <>
        <div className="card_container" id={key}>
            <h3>{title}</h3>
            <h5>By: {creator}</h5>
            <div className={`card_details ${cardType}`}>
                <div className={bgcolor}>
                    <div className={`background_block ${bgcolor} ${msgfont} ${msgcolor}`}>
                        <h4>{message}</h4>
                    </div>
                </div>
            </div>
            <button onClick={onClick}> <i className={favorited ? "fas fa-heart" : "far fa-heart"}></i></button>
        </div>

    </>
);
};

export default Card;
