// import React, { useState } from 'react'
// adding comment
const Card = (props) => {
    const {title, message} = props

return (
    <div className="card_container">
        <h3>{title}</h3>
        <div className="card_details">
            <h1>{message}</h1>
        </div>
    </div>

)}

export default Card