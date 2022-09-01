import React from 'react'

const Square = ({ value, changeBoard }) => {
    
    return (
        <button type='button' className='square' onClick={changeBoard}>{value}</button>
    )
}

export default Square