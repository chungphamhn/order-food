

const initialState = {
    restaurant: {
        name: null,
        location: null,
        dishes: {
            dish1: null,
            dish2: null
        }
    }
};

const reducer = (state = initialState, action) => {
    const temp = {
        restaurant: {
            name: "mcdonal",
            location: "turku",
            dishes: {
                dish1: "big mac",
                dish2: "nothing"
            }
        }
    };
    
    return temp;
};

export default reducer;