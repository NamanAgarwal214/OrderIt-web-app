import React from 'react'
import styling from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styling.card}>
            {props.children}
        </div>
    )
}

export default Card
