import React, { Component } from 'react';
import { Dishes } from '../Dishes/Dishes';
import Data from '../../container/restaurantInfo';
import './Restaurant.css';
import picture from '../../assets/image/burger.png';
import * as pictures from '../../assets/image/index';



export class Restaurant extends Component {
    
    render() {
        const Mcdonald = (
            Object.keys(Data["McDonnald"].dishes).map(
                dish => {
                    let temp = dish.toUpperCase().replace("_", " ");
                    let pic = null;
                    if (Data["McDonnald"].dishes[dish].type === "icecream")  {
                        pic = pictures.icecreamPicture;

                    }   
                    else if (Data["McDonnald"].dishes[dish].type === "burger"){
                        pic = pictures.burgerPicture;
                    } else {
                        pic = pictures.bigmacPicture;
                    }         
                    return (
                        
                        <Dishes
                            dishName={temp}
                            Key={temp}
                            dishPic ={pic}
                            dishPrice = {Data["McDonnald"].dishes[dish].price}
                        />
                    );
                }
            )
        )
        return (
            <div className="restaurant" >
                {Mcdonald}
            </div>
        );
    }
}



