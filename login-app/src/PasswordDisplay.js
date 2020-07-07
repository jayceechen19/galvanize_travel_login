import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class PasswordDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state = props.state
    }

    render(){
        console.log(`displayVal: ${this.state.displayValid}`)
        if (this.valid == 1){
            return(
                <React.Fragment>
                    <ListGroup>
                        <ListGroup.Item variant = "success">Passwords are valid and matching</ListGroup.Item>
                    </ListGroup>
                    <Link to="/success">
                        <Button variant="primary" type="submit">Create Account</Button>
                    </Link>
                </React.Fragment>
                
            )
        }else{
            return(
                <ListGroup.Item variant = "danger">Passwords are either not valid or matching</ListGroup.Item>
            )
        }
        
    }
}
export default PasswordDisplay