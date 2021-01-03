import logo from './logo.svg';
import './App.css';
import React from "react";
import Counters from './components/Counters';
import {render} from "@testing-library/react";


class App extends React.Component{

  render(){
  return ( //must contain at least 1 element.....everything here must be wrapped in one main enclosing tag
    <div>
     <Counters />
    </div>
  // <h1>ACL lab</h1>  //does not work as we cannot have unenclosed elements
  // <h2>lab8</h2>


  );
  }
}

export default App;
