// card.title = text
// card.outer_message = text
// card.outer_typefont = buttons or dropdown
// card.outer_message_color = buttons or dropdown
// card.outer_color = buttons or dropdown
// card.author (hidden, but needed for database)
// card.date_created (hidden, but needed for database)
// card.image = image (look into unsplash, but can provide some basic urls initially for testing)
// card.public (boolean, set to true)
// card.tag = checkbox/list

import '../AddCard.css'
import { useState } from 'react'


// const url = "http://localhost:3000/addcard/cards"

export const AddCard = () => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [bgcolor, setBgcolor] = useState('')
  const [msgcolor, setMsgcolor] = useState('')
  const [msgfont, setMsgfont] = useState()
  // const handleChange = (event) => {
  //   setMessage(event.target.value)
  // Create a function that adds the notes to the database once they're created with a POST request
  // const createCard = (title, message, bgcolor) => {
  // fetch(url, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //         // id: id.value,
  //         title: title.value,
  //         body: message.value,
  //         color: bgcolor.value,
  //         // created_at: moment().format()
  //     })
  // })
  // .then(res => res.json())
  // .then(cards => renderCardItem(cards))
  // }
  // Create a function that calls other functions (to add the note to the page and the database,) once the submit button is clicked
  const handleSubmit = (event) => {
    event.preventDefault()
    // createCard(title, message, bgcolor)
    // form.reset()
  //   document.getElementById('title').value
  //   document.getElementById('message').value
  //   
  //   form.reset()
  // })
  }
  return (
    <>
      <div className="addcard">
        <div id="preview">
          <h2>Card Preview</h2>
          <h3>Title: {title}</h3>
          <div id="output" className={bgcolor}> 
            <div className={msgfont}>
              <h4 className={msgcolor}>{message}</h4>
            </div>
          </div>
        </div>
        <div id="cardform">
          <h2>Customize your card!</h2>
          <form onSubmit={handleSubmit} id="add-card">
            <div className="input-field" id="card-title-field">
            <label htmlFor='title' id="title-label">Title:</label><br />
            <input id="title" type="text" value={title} name="title" placeholder="Give your card a title!" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="input-field" id="card-message-field">
            <label htmlFor='message'>Message:</label><br />
            <input type="textarea" value={message} name="message" placeholder="Give your card a message!" onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className="input-field">
              <label htmlFor='msgfont'>Choose a font type: </label><br />
              <label className="sans-serif"><input type="radio"  value="sans-serif" checked={msgfont === 'sans-serif'} onChange={(e) => setMsgfont(e.target.value)} />sans serif</label><br />
              <label className="serif"><input type="radio"  value="serif" checked={msgfont === 'serif'} onChange={(e) => setMsgfont(e.target.value)} />serif</label>
            </div>
            <div className="bgcolors">
              <label htmlFor='bgcolor'>Card color:</label><br />
                <button type="button" className="pink" value="pink" onClick={(e) => setBgcolor(e.target.value)}></button>
                <button type="button" className="blue" value="blue" onClick={(e) => setBgcolor(e.target.value)}></button>
                <button type="button" className="green" value="green" onClick={(e) => setBgcolor(e.target.value)}></button><br />
                <button type="button" className="white" value="white" onClick={(e) => setBgcolor(e.target.value)}></button>
                <button type="button" className="black" value="black" onClick={(e) => setBgcolor(e.target.value)}></button>
                <button type="button" className="purple" value="purple" onClick={(e) => setBgcolor(e.target.value)}></button>
            </div>
            <div className="msgcolors">
              <label htmlFor='bgcolor'>Text color:</label><br />
                <button type="button" className="pink" value="pink-text" onClick={(e) => setMsgcolor(e.target.value)}></button>
                <button type="button" className="blue" value="blue-text" onClick={(e) => setMsgcolor(e.target.value)}></button>
                <button type="button" className="green" value="green-text" onClick={(e) => setMsgcolor(e.target.value)}></button><br />
                <button type="button" className="white" value="white-text" onClick={(e) => setMsgcolor(e.target.value)}></button>
                <button type="button" className="black" value="black-text" onClick={(e) => setMsgcolor(e.target.value)}></button>
                <button type="button" className="purple" value="purple-text" onClick={(e) => setMsgcolor(e.target.value)}></button>
            </div>
            <button type="submit" id="submit">Done!</button>
          </form>
        </div>
      </div>
    </>
  )
} 



// export const ColorChangeButton = (props) => {
//   return (
//     <button className={props.color} onClick={() => props.setColor(props.color)}>{props.color}</button>
//   )
// }

// Radio buttons (and checkboxes) are different because they rely on a `checked` attribute
// That is a boolean on the element
// We want that in state so the component knows whether an attribute should render as checked in the DOM
// export const RadioInput = () => {
//   const [letter, setLetter] = useState()

//   const handleChange = (event) => {
//     setLetter(event.target.value)
//   }
//   return (
//     <>
//       <h2>Radio Buttons</h2>
//       <form>
//         <div>
//           <input
//             type="radio"
//             value="a"
//             checked={letter === 'a'}
//             onChange={handleChange}
//           />
//           {'Option A'}
//         </div>
//         <div>
//           <input
//             type="radio"
//             value="b"
//             checked={letter === 'b'}
//             onChange={handleChange}
//           />
//           {'Option B'}
//         </div>
//         <div>
//           <input
//             type="radio"
//             value="c"
//             checked={letter === 'c'}
//             onChange={handleChange}
//           />
//           {'Option C'}
//         </div>
//       </form>
//     </>
//   )
// }

