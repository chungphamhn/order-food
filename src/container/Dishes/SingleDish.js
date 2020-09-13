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
                <div>
                    <div className="title"><strong>{this.props.dishName}</strong></div>
                    <div>Price: {this.props.dishPrice} Euro</div>
                </div>
                <img src={this.props.dishPic} alt='pics of burger' />
            </div>
        );


        if (this.state.isClicked) {

            dish = (
                <div onClick={this.clickHandle} key={this.props.Key} className="SingleDish" >
                    <div>
                        <div className="title"><strong>{this.props.dishName}</strong></div>
                        <div>
                            count:
                            <button>-</button>
                            <button>+</button>
                        </div>

                        <p>Price: {this.props.dishPrice} Euro</p>
                    </div>
                    <img src={this.props.dishPic} alt='pics of Nachos' />
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