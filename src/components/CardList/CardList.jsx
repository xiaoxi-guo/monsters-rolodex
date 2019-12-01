import React from 'react';
import './CardList.css';
import {Card} from '../Card/Card';

export const CardList = (props) => {
    console.log(props)
    return(
        <div className='CardList'> 
            {props.monsters.map(item => 
                (<Card key = {item.id} monster = {item}/>)
                // (<h1 key = {item.id}>{item.name}</h1>)
            )}
        </div>
    )
}