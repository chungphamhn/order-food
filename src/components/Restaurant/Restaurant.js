import React, { Component } from 'react';
import { Dishes } from '../Dishes/Dishes';
import Data from '../../container/restaurantInfo';
import './Restaurant.css';


export class Restaurant extends Component {

    render() {
        const Mcdonald = (
            Object.keys(Data["McDonnald"].dishes).map(
                dish => {
                    let temp = dish.toUpperCase().replace("_", " ");

                    return (
                        <Dishes
                            dishName={temp}
                            Key={temp}
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



