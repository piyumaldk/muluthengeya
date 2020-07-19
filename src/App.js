import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import MenuCards from "./Pages/MenuCards";

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={Login}/>
          <Route path="/menucards" component={MenuCards}/>
        </Router>
        </React.Fragment>
    );
  } 
}

export default App;