import React, { Component } from 'react';
import {Dishes} from '../Dishes/Dishes';
import Data from '../../container/restaurantInfo';


export class Restaurant extends Component {
    state = {
        restaurantName: "PanchoVilla / Turku",
        restaurantPrice: "€€",
        restaurantDescription: "Meksikon herkkuja"
    }
    

render(){
    const Mcdonald = (
        Object.keys(Data["McDonnald"].dishes).map(
          dish => {
              let temp = dish.toUpperCase().replace("_"," ");
              
              return (<Dishes
                 dishName ={temp}
                 Key = {temp}/>);
          }
                
            
        )
    )
    return(
    <div>{Mcdonald}</div>
    )
        
        // <div>
        //     <p><strong>{this.state.restaurantName}</strong></p>
        //     <p>{this.state.restaurantDescription}</p>
        //     <p>{this.state.restaurantPrice}</p>
        // {/* <ul className = "ls">
        //    <li>
        //        <Dishes 
        //         dishName="Nachos" 
        //         dishQuantity= {2} 
        //         dishPrice={10} 
        //         dishPic={require('../../assets/image/nacho.png')}/>
        //    </li>
        //    <li>
        //        <Dishes 
        //         dishName ="Mozzarellatikut" 
        //         dishQuantity={0} 
        //         dishPrice= {7.5} 
        //         dishPic= {require('../../assets/image/mozzarellatikut.png')}/>
        //    </li>
        //    <li>
        //        <Dishes 
        //         dishName ="Finger Mix" 
        //         dishQuantity={0} 
        //         dishPrice= {9.90} 
        //         dishPic= {require('../../assets/image/fingermix.jpg')}/>
        //    </li>
        // </ul> */}
        
        
        // </div>
    
}
}



