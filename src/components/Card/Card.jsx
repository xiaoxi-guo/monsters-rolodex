import React from 'react';
import './Card.css';

export const Card =(props)=>{
    // console.log(props.monster.id)
    // console.log(`https://robohash.org/${props.monster.id}?set=set2&size=180x180`)
    return(
        <div className='Card'>
            <img alt='monster' scr={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
           <h2>{props.monster.name} </h2>
           <p>{props.monster.email} </p>
        </div>
    )
}