import Card from "./Card";
import axios from 'axios';
import { useEffect, useState } from "react";
import "../AddCard.css";


const Gallery = () => {
    const [cards, setCards] = useState(null)

    useEffect(() => {
        axios
            .get ('https://greeterycards.herokuapp.com/ecard/card_list', {
            headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => setCards(res.data))
    }, [setCards])

    return (
        <div className="gallery_container">
            <header className="App-header">
                <h1>Welcome Greeter!!</h1>
            </header>
            {cards && cards.map((card) => {
                return (
                <div className='cards_container'>
                    {/* <h3>{card.title}</h3> */}
                    {/* <Card favorited={card.favorited} /> */}
                <div className="card_container" ><Card key={card.pk} title={card.title} bgcolor={card.outer_color} font={card.outer_font} message={card.outer_message} textcolor={card.outer_message_color} favorited={card.favorited_by} creator={card.author} created={card.date_created}/></div>

                </div>)})}
            
        </div>
    );
};

export default Gallery;
