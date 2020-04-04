import React, { Component } from 'react';
import './App.css';
import NavBar from './layout/navbar';
import Users from './components/Users';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Contribute from './pages/Contribute';


const Home = () => {
  return (
    <h3>Home Page</h3>
  )
}
const About = () => {
  return (
    <h3>About</h3>
  )
}


class App extends Component {
 
  render(){
  return (

    <Router>
      <div className="container">
      <NavBar title = "CRUD App with React"/>
       <hr></hr>

      <Switch>
        <Route exact path = "/" component = {Users} />
        <Route exact path = "/add" component = {AddUser} />
        <Route exact path = "/github" component = {Contribute} />
        <Route exact path = "/edit/:id" component = {UpdateUser} />

        <Route component = {NotFound} />
       </Switch>
      
      </div>

    </Router>
    
    
  );
}
}

export default App;
