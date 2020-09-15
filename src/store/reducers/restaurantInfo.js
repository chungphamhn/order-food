import RestaurantInfo from '../../container/Restaurants/restaurantInfo';

const reducer = (state = RestaurantInfo, action) => {

    switch (action.type) {
        case "SHOW_SINGLE_RESTAURANT":
            const restaurant = RestaurantInfo[action.restaurantName];

            return {
                restaurant,
                name: action.restaurantName
            };
        default :
            return {
                restaurant: null,
                name: null
            };
    }
}

export default reducer;