import React from "react";
import {Route, Switch} from 'react-router-dom';

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ShowCars from "./components/ShowCars";

function App(props) {
  return (
    <div className='todoapp stack-large'>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/showcars" component = {ShowCars}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
