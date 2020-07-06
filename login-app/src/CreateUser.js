import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateUser(){
    return(
        <Container>
            <Row>
                <Col/>
                <Col xs = {6}>
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username: </Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <ListGroup>
                            <ListGroup.Item variant = "info">Password must be longer than 8 characters</ListGroup.Item>
                            <ListGroup.Item variant = "info">Password must include one capital letter</ListGroup.Item>
                            <ListGroup.Item variant = "info">Password must include one number</ListGroup.Item>
                            <ListGroup.Item variant = "info">Password must include one lowercase</ListGroup.Item>
                            <ListGroup.Item variant = "info">Password must include one special character (#,/,$,!,@,%,&,*)</ListGroup.Item>
                        </ListGroup>

                        <Form.Group controlId= "formPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="Enter password"/>
                        </Form.Group>
                        <Form.Group controlId= "confirmPassword">
                            <Form.Label>Re-enter Password: </Form.Label>
                            <Form.Control type="password" placeholder="Re-enter password"/>
                        </Form.Group>
                        <Link to="/success">
                            <Button variant="primary" type="submit">Create Account</Button>
                        </Link>
                    </Form>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}
export default CreateUser