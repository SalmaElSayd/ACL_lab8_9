import React from "react";
import {render} from "@testing-library/react";
import propTypes from "prop-types"

let i=0;
class Newcounter extends React.Component{
  
  constructor (props){  super(props);
  this.state={text:i};
  this.handleClick =this.handleClick.bind(this) //to bind method to this instance
  }
  handleClick(){
    i++;
    // console.log(i )
    this.setState({text:i})
  }

  render(){
  return ( 
  <div>
  <h1>the value of the counter is {this.state.text}</h1>
      <button onClick={this.handleClick} >increment</button>
    </div>
  


  );
  }
}



export default Newcounter;
