import React from 'react'
import './Card.css'

function Cards(props) {
    return (

        <img src={`/images/${props.item.image}`} className='painting' alt='£'>{props.image}</img>

    )
}

export default Cards