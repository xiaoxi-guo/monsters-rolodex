import React from 'react';
import './SearchBox.css';

export const SearchBox = (props) => {
    return(

        <div className='SearchBox'>
            <input type='search'
            placeholder = {props.placeholder}
            onChange = {props.changeHandler}/>
        </div>

    )
}