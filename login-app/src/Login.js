import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = props.state
        this.changeState = props.method
        this.enteredPassword = ''
        this.enteredUsername = ''
        
        this.submitButton = this.submitButton.bind(this)
    }

    async submitButton() {
        var data = {
            "username": this.enteredUsername,
            "password": this.enteredPassword
        }
        console.log(JSON.stringify(data))
     
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'},
            body: JSON.stringify(data),
        })
        let result = await response.json()
        this.changeState(result.response)
    }
    
    render(){
        return (
            <Container>
                <Row>
                    <Col/>
                    <Col xs={6}>
                        <Form>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username: </Form.Label>
                                <Form.Control type="text" placeholder="Enter username" onChange ={event => this.enteredUsername = event.target.value}/>
                            </Form.Group>
    
                            <Form.Group controlId= "formPassword">
                                <Form.Label>Password: </Form.Label>
                                <Form.Control type="password" placeholder="Enter password" onChange ={event => this.enteredPassword = event.target.value}/>
                            </Form.Group>
                            
                            <Link to="/loginsuccess" onClick={event => this.submitButton()}>
                                <Button variant="primary" type="submit" >Login</Button>
                            </Link>
                            <br/>
                            <br/>
                            <Link to="/createaccount">Create a New Account</Link>
                        </Form>
                    </Col>
                    <Col/>
                </Row>
    
            </Container>    
        )

    }
    
    
}
export default Login