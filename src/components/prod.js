import React, {useState} from 'react';

function Product(props){
    // console.log(props)
    const handleClick = () =>{
        props.buttonClick(props.stuff.name)
    }
console.log(props.stuff.image)
return (
    <div>
    <img src={props.stuff.image} width = "150" height= "150"/>
    <p>{props.stuff.name}</p>
    <p>{props.stuff.price}</p>
    <button onClick = {handleClick}>{props.text}</button>
        </div>
)

}

export default Product;