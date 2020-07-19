import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Router>
        
          <Route path="/" component={Login}/>
        </Router>
        </React.Fragment>
    );
  } 
}

export default App;