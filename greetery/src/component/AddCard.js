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


const url = "http://localhost:3000/cards"

export const AddCard = () => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [bgcolor, setBgcolor] = useState('')
  // const handleChange = (event) => {
  //   setMessage(event.target.value)
  // Create a function that adds the notes to the database once they're created with a POST request
  const createCard = (title, message, bgcolor) => {
  fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          // id: id.value,
          title: title.value,
          body: message.value,
          color: bgcolor.value,
          // created_at: moment().format()
      })
  })
  .then(res => res.json())
  // .then(cards => renderCardItem(cards))
}
  // Create a function that calls other functions (to add the note to the page and the database,) once the submit button is clicked
  const handleSubmit = (event) => {
    event.preventDefault()
    createCard(title, message, bgcolor)
    // form.reset()
  //   document.getElementById('title').value
  //   document.getElementById('message').value
  //   
  //   createNote(noteTitle, noteText)
  //   form.reset()
  // })
  }
  return (
    <fragment id="addcard">
        <div id="preview">
          <h2>Card Preview</h2>
          <h3>Title: {title}</h3>
          <div id="output" className={bgcolor}>  
              <p>{message}</p>
          </div>
        </div>
        <div id="cardform">
          <h2>Customize your card!</h2>
          <form onSubmit={handleSubmit} id="add-card">
            <div className="input-field" id="card-title-field">
            <label htmlFor='title' id="title-label">Title:</label><br />
            <input id="title" type="text-box" value={title} name="title" placeholder="Give your card a title!" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="input-field" id="card-message-field">
            <label htmlFor='message'>Message:</label><br />
            <input type="text" value={message} name="message" onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div id="colors">
              <label htmlFor='bgcolor'>Card color:</label><br />
                <button className="pink" value="pink" onClick={(e) => setBgcolor(e.target.value)}>pink</button>
                <button className="blue" value="blue" onClick={(e) => setBgcolor(e.target.value)}>blue</button>
                <button className="green" value="green" onClick={(e) => setBgcolor(e.target.value)}>green</button>
            </div>
            <button type="submit">Done!</button>
          </form>
        </div>
    </fragment>
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

