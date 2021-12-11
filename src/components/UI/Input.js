import React, { forwardRef } from 'react'
import styling from './Input.module.css'

const Input = forwardRef((props, ref) => {
    return (
        <div className={styling.input}>
            <label htmlFor = {props.input.id}>{props.label}</label>
            <input ref = {ref} {...props.input} />
        </div>
    )
})

export default Input
