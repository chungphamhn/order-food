import React, { useState } from 'react';
import './Dishes.css';



export const Dishes = (props) => {
    // state = {
    //     dishName: "Nachot",
    //     dishPrice: 10,
    //     dishQuantity: 2
    // }
    const [isClicked, setIsClicked] = useState(false);
    const clickHandler = () => {
        setIsClicked(true);
    }
    
        const Dishpic = require('../../assets/image/nacho.png');
        
        let dish = (
            <div key={props.Key} className= "boxed">
                <div>
                    <strong><button onClick ={clickHandler}>+</button></strong>
                </div> 
                <img src={props.dishPic} alt='pics of Nachos'/>
                <div>
                    <p className= "title"> <strong>{props.dishName}</strong></p>
                    <p>{props.dishPrice}€</p>
                </div>
            </div>
        );

        
        if (isClicked){
            console.log('hii');
            dish = (
                <div key ={props.Key}className="Opened" >
                    <div>
                        <img src={props.dishPic} alt='pics of Nachos'/>
                    </div> 
                    <div>
                        <button>-</button> <button>+</button>
                        <p>Count: {props.count}</p>
                    </div>

                    <div>
                        <p className= "title"> <strong>{props.dishName}</strong></p>
                        <p>{props.dishPrice}€</p>
                        <button>-</button>
                    </div>
                </div>
            );
        }

        return (
        <div>{dish}</div>

        );
    }
    

