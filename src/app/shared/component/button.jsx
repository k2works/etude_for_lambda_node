import React from 'react'

const Button = ({ label, handleClick }) =>
    <button
        onClick={handleClick}
        className="btn btn-primary"
        type="button"
        role="button"
    >{label}</button>

export default Button
