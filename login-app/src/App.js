import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
import CreateUser from './CreateUser';
import AccountCreated from './AccountCreated'

function App (){
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact={true} path = "/" component = {Login}/>
          <Route exact={true} path = "/createaccount" component = {CreateUser}/>
          <Route exact={true} path = "/success" component = {AccountCreated}/>
        </Router> 
      </header>
    </div>
  );
}
  

export default App;
