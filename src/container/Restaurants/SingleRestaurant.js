import React, { Component } from 'react';
import Dishes from '../Dishes/Dishes';
import RestaurantInfo from './restaurantInfo';
import * as Logo from '../../assets/image/index';

import './SingleRestaurant.css';

class SingleRestaurant extends Component {

    render() {

        const dishesData = this.props.restaurantObject["dishes"];

        return (
            <div>
                <div><img src={Logo[this.props.restaurantName]} /></div>
                <div>{this.props.restaurantName.toUpperCase().replace("_", " ")}</div>
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