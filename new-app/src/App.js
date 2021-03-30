import logo from './logo.svg';
import './App.css';
import Header from "./header/Header"
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./home/Home";
import MySkill from './myskill/MySkill';
import Sample from "./sample/Sample";
import Form from "./form/Form";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return ( 
      <Router>
        <div className = "App" >
          <Header />
          <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/myskill" exact component={MySkill}/>
            <Route path="/sample" exact component={Sample}/>
            <Route path="/form" exact component={Form}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;