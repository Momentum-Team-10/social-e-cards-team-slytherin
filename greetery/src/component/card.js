// import React, { useState } from 'react'

const Card = (props) => {
    const {title, message} = props

return (
    <div>
        <h1>{title}</h1>
        <h1>{message}</h1>
    </div>
)}

export default Card