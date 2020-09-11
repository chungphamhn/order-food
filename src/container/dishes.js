import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dish extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.restaurantInfo.restaurant.name,
        location: state.restaurantInfo.restaurant.location
    };
};

export default Dish;