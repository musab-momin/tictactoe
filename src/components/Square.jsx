import React from 'react'

const Square = ({ value, changeBoard, winningCombination }) => {
    
    return (
        <button 
        type='button' 
        className='square' 
        style={{ fontWeight: winningCombination ? 'bold' : 'normal' }} 
        onClick={changeBoard}
        >
            {value}
        </button>
    )
}

export default Square