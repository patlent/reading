import React from 'react';
import './App.css';

import Nav from "./components/Nav";
import CoolPerson from "./components/CoolPerson"



import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  return (
      <div className="App">
        <Router>
          <Nav/>
          <Route exact path={"/CoolPerson"} component={CoolPerson}/>

        </Router>
      </div>
  );
}

export default App;
