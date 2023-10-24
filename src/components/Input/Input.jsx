import React from 'react'
import './style.scss'
function Input(props){
    
    return (
        <div className='input-box'>
            {
                props.iconLeft && props.iconLeft
            }
            <input type={props.type ? props.type : 'text'} placeholder={props.placeholder && props.placeholder}/>
            {
                props.iconRight && props.iconRight
            }
        </div>
    )
}

export default Input