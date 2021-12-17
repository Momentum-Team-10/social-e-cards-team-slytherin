import { useState } from 'react'
// import Card from './component/Card'
import Gallery from './component/Gallery'
import { cardsData } from './cardsData'
import './App.css';
import Navbar from './component/Navbar'
import { AddCard, ColorChangeButton } from './component/AddCard'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import useLocalStorateState from 'use-local-storage-state'

function App() {
  const [cards] = useState(cardsData)
      
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar />
        <Gallery cards={cards}/>
        <AddCard />
      {/* </Router> */}
    </div>
  );
}

export default App;
