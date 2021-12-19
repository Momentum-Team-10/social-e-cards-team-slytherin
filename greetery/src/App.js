import { useState } from 'react'
// import Card from './component/Card'
import Gallery from './component/Gallery'
import { cardsData } from './cardsData'
import './App.css';
import Navbar from './component/Navbar'
import { AddCard } from './component/AddCard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import useLocalStorateState from 'use-local-storage-state'

function App() {
  const [cards] = useState(cardsData)
      
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery cards={cards}/>} />
          <Route path="/addcard" element={<AddCard />} />
          {/* <Route path="/mygallery" element={Gallery cards.filter={cards}} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
