import React, { Component } from 'react';
import './Dishes.css';



export class Dishes extends Component {
    state = {
        isClicked : false
    }
    clickHandle = () => {
        this.setState({isClicked : !this.state.isClicked});
        
    }
    render() {

        

        
        let dish = (
            <div onClick={this.clickHandle} key={this.props.Key} className="boxed">

                <img src={this.props.dishPic} alt = 'pics of burger' />
                <div>
                    <p className="title"> <strong>{this.props.dishName}</strong></p>
                    <p>{this.props.dishPrice}€</p>
                </div>
            </div>
        );


        if (this.state.isClicked) {

            dish = (
                <div onClick={this.clickHandle}  key={this.props.Key} className="Opened" >
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


