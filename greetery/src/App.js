import { useState } from 'react'
// import Card from './component/Card'
import Gallery from './component/Gallery'
import { cardsData } from './cardsData'
import './App.css';
import Navbar from './component/Navbar';

function App() {
  const [cards] = useState(cardsData)
      
  return (
    <div className="App">
      <Navbar />
      <Gallery cards={cards}/>
    </div>
  );
}

export default App;
