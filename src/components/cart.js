import React, {useState} from 'react';
import Product from './prod'


class Cart extends React.Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
}
handleClick = (prodname)=>{
    this.props.buttonClick(prodname)
    }
render(){
    console.log(this.props.items)
        return this.props.items.map((prod) => <Product key={prod} stuff = {prod} buttonClick={this.handleClick} text ="remove from cart"/>);
    
    }


}

export default Cart;