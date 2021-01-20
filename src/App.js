import React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";

import  Header  from "./components/header";
import Home from "./components/page/home";
import  List  from "./components/page/list";
import Service from "./components/page/service";
import Contact from "./components/page/contact";

class App extends React.Component{
  render(){
    return(
      
    <div class="">
      <Router>
        <Header/>

        <Route path="/page/home" component={Home}/>
        <Route path="/page/list" component={List}/>
        <Route path="/page/service" component={Service}/>
        <Route path="/page/contact" component={Contact}/>
        
      </Router>
  </div>

    );
  }
} 

export default App;
