import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSingleRestaurant } from '../../store/actions/displayRestaurantInfo';

import SingleRestaurant from './SingleRestaurant';
import RestaurantInfo from './restaurantInfo';


class AllRestaurants extends Component {


    showRestaurantHandle = (restaurantName) => {
        this.props.onShowSingleRestaurant(restaurantName);

    }

    render() {

        let showSingleRestaurant = null;
        if (this.props.res) {
            showSingleRestaurant = (
                <SingleRestaurant
                    restaurantObject={this.props.res}
                    restaurantName={this.props.name}
                />
            );
        }

        //const allRestaurantObjects = Object.keys(RestaurantInfo).map(
        //    restaurant => (
        //        <SingleRestaurant
        //            restaurantObject={RestaurantInfo[restaurant]}
        //            restaurantName={restaurant.toUpperCase().replace("_", " ")}
        //        />
        //    )
        //);

        const showRestaurants = Object.keys(RestaurantInfo).map(
            restaurant => (
                <button onClick={() => this.showRestaurantHandle(restaurant)}>
                    {restaurant.toUpperCase().replace("_", " ")}
                </button>
            )
        );
        return (
            <div>
                {showRestaurants}
                {showSingleRestaurant}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        res: state.resInfoReducer.restaurant,
        name: state.resInfoReducer.name
    }

}

const mapDispatchToProps = dispatch => {

    return {
        onShowSingleRestaurant: (name) => dispatch(showSingleRestaurant(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRestaurants);