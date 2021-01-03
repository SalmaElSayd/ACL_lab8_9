import React, {useState} from 'react';
import MyCart from './cart'
import Product from './prod'


import bear from '../images/bear.jpg';
import gun from '../images/gun.jpg';
import car from '../images/car.jpg';


let allProducts  = [{name:"teddy bear", price:20, image:bear}, {name:"gun", price:20, image:gun}, {name:"car", price:20, image:car}];
let cartitems = []
class Shop extends React.Component {
constructor(props){
    super(props);
    this.state = {cart: cartitems};
    this.handleClick = this.handleClick.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
}

handleClick = (prodname)=>{
        cartitems.push(allProducts.find(function (value) {return value.name === prodname}))
        console.log("adding "+ allProducts.indexOf({name:prodname}))
        this.setState({cart:cartitems})
        console.log("cart"+cartitems)
    }

handleCartClick = (prodname)=>{
    for( var i = 0; i < cartitems.length; i++){ 
                                   
        if ( cartitems[i].name === prodname) { 
            cartitems.splice(i, 1); 
            i--; 
        }
    }
        this.setState({cart:cartitems})
        console.log("cart"+cartitems)
    }
   render(){ 
return (
    <div class = "container">
        <h1>    welcome to shop</h1>
        <div class= "column">
        <h2>Browsing</h2>
        
        {allProducts.map((prod) => <Product key={prod} stuff = {prod} buttonClick={this.handleClick} text ="add to cart"/>)}
    </div>

    <div class= "column">
    <h2>My Cart</h2>
    <MyCart items = {cartitems} buttonClick = {this.handleCartClick}/>
    </div>
        </div>
)}

}



export default Shop;