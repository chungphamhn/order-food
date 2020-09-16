import React, { Component } from 'react';
import './SingleDish.css';
import { plugins } from 'pretty-format';



class SingleDish extends Component {

    //local state

    state = {
        isClicked: false,
        count: 0
        //showAddButton: true
        //showPlusButton: true
    }

    //showPlusButtonHandler = () => {
    //    this.setState({
    //        //showPlusButton: !this.state.showPlusButton,
    //        count: this.state.count + 1,
    //        showAddButton: false
    //    });

    //}
    //showAddButtonHandler = () => {
    //    this.setState({
    //        //showAddButton: false,
    //        count: this.state.count + 1
    //    });
    //}

    addDishHanle = () => {
        this.setState({
            count: this.state.count + 1
            //showAddButton: false
        });
    }

    minusDishHandle = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });

            //to use to display "+" sign
            if (this.state.count === 1) {
                this.setState({
                    isClicked: !this.state.isClicked
                    //showAddButton: true
                });
            }
        }
    }

    clickHandle = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }


    render() {

        //display ingredients of the dish
        const showIngredients = (
            this.props.dishIngredients.map(
                ingre => {
                    //let ing = "";
                    if (this.props.dishIngredients.indexOf(ingre) === this.props.dishIngredients.length - 1) {
                        return  ingre;
                    }
                    else {
                        return  (ingre + ", ");
                    }
                    //return (
                    //    ing
                    //)
                }
            )
        );


        let plusButton = null;

        if (!this.state.isClicked && this.state.count === 0) {
            plusButton = (
                <div>
                    <button
                        onClick={this.addDishHanle}
                        className="plusbtn">+
                    </button>
                </div>

            );
        }
        else if (!this.state.isClicked && this.state.count !== 0) {
            plusButton = <div>{this.state.count} X</div>;
        }

        //if (!this.state.showPlusButton) {
        //    plusButton = <div>{this.state.count} X</div>

        //}
        //if (this.state.count === 0) {
        //    plusButton = (
        //        <div>
        //            <button
        //                onClick={this.showPlusButtonHandler}
        //                className="plusbtn">+
        //            </button>
        //        </div>
        //    )

        //}

        let showCount = (
            <div>
                <button className="btn" onClick={this.addDishHanle}>Add to order</button>
            </div>
        );

        if (this.state.count !== 0) {
            showCount = (
                <div>Quantity: {this.state.count}
                    <button onClick={this.minusDishHandle}>-</button>
                    <button onClick={this.addDishHanle}>+</button>
                </div>
            );
        }

        //main component before clicked
        let dish = (
            <div onClick={this.clickHandle} key={this.props.Key} className="SingleDish">
                {plusButton}
                <div>
                    <div className="title"><strong>{this.props.dishName}</strong></div>
                    <div className="price">€{this.props.dishPrice} </div>
                    <div>{showIngredients}</div>
                </div>
                <div>
                    <img src={this.props.dishPic} alt='pics of burger' />
                </div>
            </div>
        );

        if (this.state.isClicked) {

            //after component is clicked
            dish = (

                <div key={this.props.Key} className="SingleDishOpen" >
                    <div onClick={this.clickHandle}><img src={this.props.dishPic} alt='pics of Nachos' /></div>
                    <div onClick={this.clickHandle}>
                        <div className="title"><strong>{this.props.dishName}</strong></div>
                        <div>{showIngredients}</div>
                        <div className="price">€{this.props.dishPrice}</div>
                    </div>
                    {showCount}
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