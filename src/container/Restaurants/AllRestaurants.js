import React, { Component } from 'react';
import SingleRestaurant from './SingleRestaurant';
import RestaurantInfo from './restaurantInfo';
import allRestaurants from './restaurantInfo';

class AllRestaurants extends Component {

    render() {

        const allRestaurantObjects = Object.keys(RestaurantInfo).map(
            restaurant => (
                <SingleRestaurant
                    restaurantObject={RestaurantInfo[restaurant]}
                    restaurantName={restaurant.toUpperCase().replace("_", " ")}
                />
            )
        );
        console.log(allRestaurantObjects);
        

        return (
            <div>
                {allRestaurantObjects}
            </div>
        );
    }
}

export default AllRestaurants;