import React, { Component } from 'react';
import SingleDish from './SingleDish';

import Data from '../Restaurants/restaurantInfo';
import * as pictures from '../../assets/image/index';

import './Dishes.css';

class Dishes extends Component {

    render() {
        const Mcdonald = (
            Object.keys(Data["McDonnald"].dishes).map(
                dish => {
                    let temp = dish.toUpperCase().replace("_", " ");
                    let pic = null;
                    if (Data["McDonnald"].dishes[dish].type === "icecream") {
                        pic = pictures.icecreamPicture;

                    }
                    else if (Data["McDonnald"].dishes[dish].type === "burger") {
                        pic = pictures.burgerPicture;
                    } else {
                        pic = pictures.bigmacPicture;
                    }
                    return (

                        <SingleDish
                            dishName={temp}
                            Key={temp}
                            dishPic={pic}
                            dishPrice={Data["McDonnald"].dishes[dish].price}
                        />
                    );
                }
            )
        )
        return (
            <div className="Dishes" >
                <ul>
                    {Mcdonald}
                </ul>
               
            </div>
        );
    }
}

export default Dishes;



