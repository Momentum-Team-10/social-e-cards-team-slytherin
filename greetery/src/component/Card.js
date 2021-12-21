import React, { useState } from "react";
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// adding comment
const Card = (props) => {
    const { title, bgcolor, font, message, textcolor, creator } = props;
    // const { cardId } = useParams()
    const [favorited, setFavorited] = useState("");
    // const [cardObj, setCardObj] = useState(null)
    
    const onClick = () => {
        setFavorited(!favorited)
        // placeholder for favorited endpoint
    }

    // useEffect(() => {
    //     axios
    //         .get(`https://greeterycards.herokuapp.com/ecard/card_detail/${cardId}`, {
    //             // headers: {
    //                 // Authorization: `token ${token}`,
    //             // },
    //         })
    //         .then((res) => {
    //             console.log(res.data)
    //             setCardObj(res.data)
    //         })
    // }, [])
    
    return (
        <>
        <div className="card_container">
            <h3>{title}</h3>
            <h5>By: {creator}</h5>
            <div className="card_details">
                <div className={bgcolor}>
                    <div className={font}>
                    <h4 className={textcolor}>{message}</h4>
                    </div>
                </div>
            </div>
            <button onClick={onClick}> <i className={favorited ? "fas fa-heart" : "far fa-heart"}></i></button>
        </div>

    </>
);
};

export default Card;
