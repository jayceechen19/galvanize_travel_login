import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import "bootswatch/dist/minty/bootstrap.min.css";
import Login from './Login';
import CreateUser from './CreateUser';
import AccountCreated from './AccountCreated'
import LoginResult from './LoginResult'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      serverResponse:''
      // enteredUsername: '',
      // enteredPassword:''
    }

    // this.submitButton = this.submitButton.bind(this)
    // this.changeUsername = this.changeUsername.bind(this)
    // this.changePassword = this.changePassword.bind(this)
    this.changeServerResponse = this.changeServerResponse.bind(this)
  }
  
  changeServerResponse(response){
    this.setState({serverResponse: response})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Route exact={true} path = "/" component = {()=> 
              <Login state = {this.state} method = {this.changeServerResponse}/>}
            />
            <Route exact={true} path = "/createaccount" component = {() => <CreateUser state = {this.state} method = {this.changeServerResponse}/>}/>
            <Route exact={true} path = "/success" component = {() => <AccountCreated state = {this.state}/>}/>
            <Route exact={true} path = '/loginresult' component = {() => <LoginResult state = {this.state}/>}/>
          </Router> 
        </header>
      </div>
    )
  }
  
}
  

export default App;
