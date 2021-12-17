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

// export const ColorChangeButton = (props) => {
//   return (
//     <button className={props.color} onClick={() => props.setColor(props.color)}>{props.color}</button>
//   )
// }

export const AddCard = () => {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [bgcolor, setBgcolor] = useState('')
  // const handleChange = (event) => {
  //   setMessage(event.target.value)

  return (
    <>
      <div id="preview">
        <h2>Card Preview</h2>
        <h3>Title: {title}</h3>
        <div id="output">  
          <div className={bgcolor}>
            <p>{message}</p>
          </div>
        </div>
      </div>
      <form>
        <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={message} name="message" onChange={(e) => setMessage(e.target.value)} />
        <div id="colors">
            <button className="pink" value="pink" onClick={(e) => setBgcolor(e.target.value)}>pink</button>
            <button className="blue" value="blue" onClick={(e) => setBgcolor(e.target.value)}>blue</button>
            <button className="green" value="green" onClick={(e) => setBgcolor(e.target.value)}>green</button>
        </div>
      </form>
    </>
  )
} 


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

