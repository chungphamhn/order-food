import React, { Component } from 'react';
import './SingleDish.css';



class SingleDish extends Component {


    state = {
        isClicked: false,
        count: 0,
        showAddButton: true
    }
    showAddButtonHandler = () => {
        this.setState({showAddButton: !this.state.showAddButton});
    }
    
    addDishHanle = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    minusDishHandle = () => {    
        if (this.state.count > 0){
            this.setState(state => ({
                count: state.count - 1
            }));
        }
        else if (this.state.count === 0){
            this.setState(
                {
                    isClicked: !this.state.isClicked,
                    showAddButton: true
                });
         }
    }

     clickHandle = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }
    render() {
        const showIngredients = (
            this.props.dishIngredients.map(
                ingre => {
                    let ing = "";
                    if (this.props.dishIngredients.indexOf(ingre) === this.props.dishIngredients.length-1 ){
                        ing = ingre;
                    } 
                    else {
                        ing = ingre + ", ";
                    }
                    return (
                        ing    
                    )
                  
                }
            )
        );

       
        let showCount = (
            <div>
                <button className = "btn" onClick ={this.showAddButtonHandler}>Add to order</button>
            </div>
        );

        if (!this.state.showAddButton){
            showCount = (
               <div> count: {this.state.count}
                    <button onClick = {this.minusDishHandle}>-</button>
                    <button onClick = {this.addDishHanle}>+</button>
                </div>
            );
        }
        let dish = (
            <div onClick={this.clickHandle} key={this.props.Key} className="SingleDish">
                <div>
                    <div className="title"><strong>{this.props.dishName}</strong></div>
                    <div className="price">€{this.props.dishPrice} </div>
                    <div>{showIngredients}</div>
                </div>
                    <img src={this.props.dishPic} alt='pics of burger' />
            </div>
        );
       
        if (this.state.isClicked) {
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