import React, {useState} from 'react';

let i=0;

function FCounter(props){

    const [text, setText]=useState(i);
    const handleClick = () =>{
        i++;
        setText(i);
    }
    const [color, setColour] =useState("aqua");
    const divstyle = {backgroundColor:color}
    const handleChange = (ev) =>{
        const newcolor = ev.target.value ;
        setColour(newcolor);
    }
    return (
        <div style = {divstyle}>
        <h1> {props.paragraphText} </h1>
        <p>{text}</p>
        <button onClick={handleClick} >inc </button>
        <h1>colour picker</h1>
        <input onChange={handleChange}/>
        
            </div>
    )
}


export default FCounter;