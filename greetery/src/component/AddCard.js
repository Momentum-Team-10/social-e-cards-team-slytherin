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



import { useState } from 'react'

export const ColorChangeButton = (props) => {
  return (
    <button className={props.color} onClick={() => props.setColor(props.color)}>{props.color}</button>
  )
}

export const AddCard = () => {
  // const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [bgcolor, setBgcolor] = useState('')
  const handleChange = (event) => {
    setMessage(event.target.value)
  }
  return (
    <>
      <h2>Card Preview</h2>
      {/* <h3>Title: {title}</h3> */}
      <div className={`react-root ${bgcolor}`}>
        <p>{message}</p>
      </div>
      <form>
        {/* <input type="text" value={title} onChange={handleChange} /> */}
        <input type="text" value={message} onChange={handleChange} />
        <div id="buttons">
            <ColorChangeButton color='pink' setColor={setBgcolor} />
            <ColorChangeButton color='blue' setColor={setBgcolor} />
            <ColorChangeButton color='green' setColor={setBgcolor} />
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

