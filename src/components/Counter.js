import React from "react";
import {render} from "@testing-library/react";
import propTypes from "prop-types"

class Counter extends React.Component{ //omg objects
  state = {
    counter:this.props.initialCount,
  };
  incCount = ()=>{
    this.setState({counter:this.state.counter+1});
    console.log(this.state.counter);
  }
  showCount(){
    if (this.state.counter === 0){
      return "zero";
    }else 
    return this.state.counter;
  };
  render(){
  return ( //must contain at least 1 element.....everything here must be wrapped in one main enclosing tag
    <div>
      <h1>{this.showCount()}</h1>
      {this.props.children}
      <button onClick = {this.incCount} >increment</button>
    </div>
  // <h1>ACL lab</h1>  //does not work as we cannot have unenclosed elements
  // <h2>lab8</h2>


  );
  }
}

Counter.propTypes ={
  initialCount : propTypes.number,
}

export default Counter;
