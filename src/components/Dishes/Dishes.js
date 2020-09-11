import React from 'react';
import './Dishes.css';



export const Dishes = (props) => {
    // state = {
    //     dishName: "Nachot",
    //     dishPrice: 10,
    //     dishQuantity: 2
    // }
    
        const Dishpic = require('../../assets/image/nacho.png');

        return (
            <div className= "boxed">
                <div>
                <strong><button >+</button></strong>
                </div> 
                <img src={props.dishPic} alt='pics of Nachos'/>
                <p>
                <p className= "title"> <strong>{props.dishName} (L,G,V)</strong></p>
                <p>{props.dishPrice}€</p>
                </p>
                
                
            

            </div>

        );
    }
    

