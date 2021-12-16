import Card from "./Card";

const Gallery = (props) => {
    return (
        <div className="gallery_container">
            <header className="App-header">
                <h1>Welcome Greeter!!</h1>
            </header>
            <div className='cards_container'>
            {props.cards.map((card, index) => (
                <Card title={card.title} key={index} message={card.message} />
            
            ))}
            </div>
        </div>
    );
};

export default Gallery;
