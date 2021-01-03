
import React from "react";
import Counter from './Counter';
import {render} from "@testing-library/react";


class Counters extends React.Component{

  render(){
  return ( //must contain at least 1 element.....everything here must be wrapped in one main enclosing tag
    <div>
     <Counter initialCount = {"k"}>this is my counter</Counter>
     <Counter  initialCount = {0}/>
     <Counter  initialCount = {2}/>
    </div>
  // <h1>ACL lab</h1>  //does not work as we cannot have unenclosed elements
  // <h2>lab8</h2>


  );
  }
}

export default Counters;
