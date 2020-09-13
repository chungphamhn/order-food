import React, { Component } from 'react';
import SingleRestaurant from './SingleRestaurant';
import RestaurantInfo from './restaurantInfo';

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

        return (
            <div>
                {allRestaurantObjects}
            </div>
        );
    }
}

export default AllRestaurants;