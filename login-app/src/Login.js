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
        this.state = {
            displayForm: true,
            enterUser: '',
            enterPass: '',
            submitResponse: ''
        }
        this.submitButton = this.submitButton.bind(this)
    }
    
    
    async submitButton() {
        var data = {
            "username": this.state.enterUser,
            "password": this.state.enterPass
        }
        const response = await fetch('http://localhost:3001/login', {
            method: 'GET',
            body: JSON.stringify(data)
        })

        this.setState({display:false})
        this.setState({submitResponse: response})
    }

    render(){
        if (this.state.displayForm){
            return (
                <Container>
                    <Row>
                        <Col/>
                        <Col xs={6}>
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username: </Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value = {this.state.enterUser}/>
                                </Form.Group>
        
                                <Form.Group controlId= "formPassword">
                                    <Form.Label>Password: </Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" value= {this.state.enterPass}/>
                                </Form.Group>
        
                                <Button variant="primary" type="submit" onClick={this.submitButton()}>Login</Button>
                                <br/>
                                <br/>
                                <Link to="/createaccount">Create a New Account</Link>
                            </Form>
                        </Col>
                        <Col/>
                    </Row>
        
                </Container>    
            )
        }else{
            return(
                <Container>
                    <Row>
                        <Col/>
                        <Col>
                            <h4>{this.state.submitResponse}</h4>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
            )
            
        }
    }
    
    
}
export default Login