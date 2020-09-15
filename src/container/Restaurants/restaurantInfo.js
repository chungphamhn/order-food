const allRestaurants = {
    McDonnald : {
        location: "turku",
        dishes: {
            burger: {
                ingredient: ["bread ", "meat ", "salad "],
                price: 10.0,
                type: "burger",
                
            },
            big_mac: {
                ingredient: ["bread ", "meat ", "salad "],
                price: 10.0,
                type: "bigmac"
            },
            ice_cream: {
                ingredient: ["ice cream"],
                price: 10.0,
                type: "icecream"
            }
        }
    },
    Burger_King : {
        location: "turku",
        dishes: {
            burger: {
                ingredient: ["bread ", "meat ", "salad "],
                price: 10,
                type: "burger"
            },
            big_burger: {
                ingredient: ["bread ", "meat ", "salad "],
                price: 10,
                type: "burger"
            },
            ice_cream: {
                ingredient: ["ice cream"],
                price: 10,
                type: "drink"
            }
        }
    }
}

export default allRestaurants;