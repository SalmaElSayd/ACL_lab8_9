import React from "react";
import {render} from "@testing-library/react";
import propTypes from "prop-types"
import Newcounter from './Newcounter';
let para=""
class Writer extends React.Component{
  
  constructor (props){  super(props);
  this.state={paragraph:para};
  this.handleChange =this.handleChange.bind(this) //to bind method to this instance
  }
  handleChange(ev){
    para=ev.target.value
    this.setState({paragraph:para})
  }

  render(){
  return ( 
  <div>
        <Newcounter />

    <h1>Write here</h1>
      <input onChange={this.handleChange} />
    <h1>read here</h1>
    <p>{this.state.paragraph}</p>
    </div>
  


  );
  }
}



export default Writer;
