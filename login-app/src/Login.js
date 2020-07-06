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

function Login(){

    return (
        <Container>
            <Row>
                <Col/>
                <Col xs={6}>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username: </Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId= "formPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="Enter password"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">Login</Button>
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
export default Login