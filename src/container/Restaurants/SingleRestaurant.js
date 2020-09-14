import React, { Component } from 'react';
import Dishes from '../Dishes/Dishes';
import RestaurantInfo from './restaurantInfo';

import './SingleRestaurant.css';

class SingleRestaurant extends Component {

    render() {

        const dishesData = this.props.restaurantObject["dishes"];

        return (
            <div>
                <div>Restaurant Image</div>
                <div>{this.props.restaurantName}</div>
                <div className="single_restaurant_main_page">
                    <div className="categories">Category</div>
                    <div className="all_dishes">
                        <Dishes dishesData={dishesData} />
                    </div>

                    <div className="venue_info">Restaurant Operation Information</div>
                </div>

            </div>
        );
    }
}

export default SingleRestaurant;