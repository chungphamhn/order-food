import React, { Component } from 'react';
import Dish from './dishes';
import allRestaurants from './restaurantInfo';

class Restaurants extends Component {

    render() {
       

        const displayRestaurant = (
            Object.keys(allRestaurants).map(
                restaurant => (
                    <div key={restaurant}>
                        <Dish name={restaurant} />
                    </div>
                )
            )
        );

        return (
            <div>
                {displayRestaurant}
            </div>
        );
    }
}

export default Restaurants