import React, { Component } from 'react';
import './Dishes.css';



export class Dishes extends Component {

    clickHandler = () => {

    }
    
    render() {

        let isClicked = false;

        const Dishpic = require('../../assets/image/nacho.png');
        let dish = (
            <div key={this.props.Key} className="boxed">

                <img src={this.props.dishPic} alt='pics of Nachos' />
                <div>
                    <p className="title"> <strong>{this.props.dishName}</strong></p>
                    <p>{this.props.dishPrice}€</p>
                </div>
            </div>
        );


        if (isClicked) {

            dish = (
                <div key={this.props.Key} className="Opened" >
                    <div>
                        <img src={this.props.dishPic} alt='pics of Nachos' />
                    </div>
                    <div>

                        <p>Count: {this.props.count}</p>
                    </div>

                    <div>
                        <p className="title"> <strong>{this.props.dishName}</strong></p>
                        <p>{this.props.dishPrice}€</p>
                        <button>-</button>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {dish}
            </div>

        );
    }

}


