import React, { Component } from 'react';
import './SingleDish.css';



class SingleDish extends Component {
    state = {
        isClicked: false
    }
    clickHandle = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }
    render() {

        let dish = (
            <div onClick={this.clickHandle} key={this.props.Key} className="SingleDish">

                <img src={this.props.dishPic} alt='pics of burger' />
                <div>
                    <p className="title"> <strong>{this.props.dishName}</strong></p>
                    <p>Price: {this.props.dishPrice} Euro</p>
                </div>
            </div>
        );


        if (this.state.isClicked) {

            dish = (
                <div onClick={this.clickHandle} key={this.props.Key} className="SingleDish" >

                    <img src={this.props.dishPic} alt='pics of Nachos' />

                    <div>

                        <p className="title"> <strong>{this.props.dishName}</strong></p>
                        <p>count: </p>
                        <button>-</button>           
                        <button>+</button>    
                        <p>Price: {this.props.dishPrice} Euro</p>
                        
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


export default SingleDish;