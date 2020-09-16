import React, { Component } from 'react';
import './SingleDish.css';



class SingleDish extends Component {


    state = {
        isClicked: false,
        count: 0,
        showAddButton: true,
        showPlusButton :true
    }
    showPlusButtonHandler = () => {
        this.setState({
            
            showPlusButton: !this.state.showPlusButton,
            count: this.state.count +1,
            showAddButton: false
        });

    }
    showAddButtonHandler = () => {
        this.setState({showAddButton: !this.state.showAddButton});
    }
    
    addDishHanle = () => {
        this.setState({
            
            count: this.state.count + 1
        });
    }

    minusDishHandle = () => {    
        if (this.state.count > 0){
            this.setState(state => ({
                count: state.count - 1
            }));
            if (this.state.count === 1){
                this.setState ({
                    isClicked: !this.state.isClicked,
                    showAddButton: true

                })
            }
        }
        
         
    }

     clickHandle = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }
    render() {
        console.log(this.state.count);
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
        
        let plusButton = null;
        if (!this.state.showPlusButton){
            plusButton = <div>{this.state.count} X</div>
            
        }
        if ( this.state.count === 0){
            plusButton = (<div><button onClick={this.showPlusButtonHandler} className = "plusbtn">+</button></div>)
        
        }
       
        let showCount = (
            <div>
                <button className = "btn" onClick ={this.showAddButtonHandler}>Add to order</button>
            </div>
        );

        if (!this.state.showAddButton ){
            showCount = (
               <div> Quantity: {this.state.count}
                    <button onClick = {this.minusDishHandle}>-</button>
                    <button onClick = {this.addDishHanle}>+</button>
                </div>
            );
        }
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