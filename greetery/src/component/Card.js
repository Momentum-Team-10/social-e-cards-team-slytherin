import React, { useState } from "react";
// adding comment
const Card = (props) => {
const { title, message, bgcolor, favorite } = props;
const [favorited, setFavorite] = useState(favorite);

const onClick = () => {
    setFavorite(!favorited)
    // placeholder for favorited endpoint
}



return (
    <>
    <div className="card_container">
        <h3>{title}</h3>
        <div className={bgcolor}>
            <div className="card_details">
                <h1>{message}</h1>
            </div>
        </div>
        <button onClick={onClick}> <i className={favorited ? "fas fa-heart" : "far fa-heart"}></i></button>
    </div>
    
    </>
);
};

export default Card;
