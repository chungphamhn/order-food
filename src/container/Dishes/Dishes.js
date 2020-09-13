import React, { Component } from 'react';
import SingleDish from './SingleDish';

import Data from '../Restaurants/restaurantInfo';
import * as pictures from '../../assets/image/index';

import './Dishes.css';

class Dishes extends Component {

    render() {

        const dishesData = this.props.dishesData;
        const showDishes = (
            Object.keys(dishesData).map(
                dish => {
                    let temp = dish.toUpperCase().replace("_", " ");
                    let pic = null;
                    if (dishesData[dish].type === "icecream") {
                        pic = pictures.icecreamPicture;

                    }
                    else if (dishesData[dish].type === "burger") {
                        pic = pictures.burgerPicture;
                    } else {
                        pic = pictures.bigmacPicture;
                    }
                    return (

                        <SingleDish
                            dishName={temp}
                            key={temp}
                            dishPic={pic}
                            dishPrice={dishesData[dish].price}
                        />
                    );
                }
            )
        )
        return (
            <div >
                {showDishes}

            </div>
        );
    }
}

export default Dishes;



