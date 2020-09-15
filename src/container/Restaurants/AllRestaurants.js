import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSingleRestaurant } from '../../store/actions/displayRestaurantInfo';

import SingleRestaurant from './SingleRestaurant';
import RestaurantInfo from './restaurantInfo';
import * as Logo from '../../assets/image/index';


class AllRestaurants extends Component {

    state = {
        isInHomePage: true
    }

    showRestaurantHandle = (restaurantName) => {
        this.props.onShowSingleRestaurant(restaurantName);
        this.setState({ isInHomePage: false });

    }

    homeButton = () => {
        this.setState({ isInHomePage: true });        
    }

    render() {

        let showSingleRestaurant = null;

        if (!this.state.isInHomePage) {
            showSingleRestaurant = (
                <SingleRestaurant
                    restaurantObject={this.props.res}
                    restaurantName={this.props.name}
                />
            );

        }
        else {
            showSingleRestaurant = Object.keys(RestaurantInfo).map(
                restaurant => (
                    <div key={restaurant} onClick={() => this.showRestaurantHandle(restaurant)}>
                        <div>
                            <img src={Logo[restaurant]} alt="logo" />
                        </div>
                        <div >
                            {restaurant.toUpperCase().replace("_", " ")}
                        </div>
                        
                    </div>

                )
            );
        }

        return (
            <div>
                <div>
                    <button onClick={this.homeButton}>Home</button>
                </div>

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