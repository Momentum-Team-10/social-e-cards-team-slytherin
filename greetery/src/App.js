import { useState } from 'react'
// import Card from './component/Card'
import Gallery from './component/Gallery'
import { cardsData } from './cardsData'
import './App.css';
import Navbar from './component/Navbar'
import Login from './component/Navbar'
import  { AddCard } from './component/AddCard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'

function App() {
  const [cards] = useState(cardsData)
  const [token, setToken] = useLocalStorageState("greeteryAuthToken", null)
  const [username, setUsername] = useLocalStorageState("greeteryUsername", "")

  function setAuth(username, token){
    setUsername(username)
    setToken(token)
  }
  // const isLoggedIn 
      
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery cards={cards}/>} />
          <Route path="/addcard" element={<AddCard />} />
          <Route path="/login" element={<Login setAuth={setAuth} hello="hello" />} />
          {/* <Route path="/mygallery" element={Gallery cards.filter={cards}} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
