import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){

    return (
        <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username: </Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId= "formPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
            Login
            </Button>
            <Link to="/createaccount">Create a New Account</Link>
        </Form>
    )
    
}
export default Login