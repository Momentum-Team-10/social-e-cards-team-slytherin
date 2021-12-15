import { useState } from 'react';
import { cardsData } from './cardsData'
import Card from './component/Card.js'
import './App.css';

function App() {
  const [cards] = useState(cardsData)

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is our app</h1>
      </header>
      {cards.map((card, index) => (
        <Card title={card.title} key={index} message={card.message}/>
      ))}
    </div>
  );
}

export default App;
