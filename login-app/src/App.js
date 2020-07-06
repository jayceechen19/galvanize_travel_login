import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';

function App (){
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Login/>
          <Route path = "/" component = {Login}/>
          <Route path = "/createaccount" component = {CreateUser}/>
        </Router>
      </header>
    </div>
  );
}
  

export default App;
