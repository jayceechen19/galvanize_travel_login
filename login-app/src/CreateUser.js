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

// import PasswordDisplay from './PasswordDisplay'
class CreateUser extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            ...props.state,
            firstPassword: "",
            displayValid: false
        }

        this.setFirst = this.setFirst.bind(this)
        this.checkPasswordRequirements = this.checkPasswordRequirements.bind(this)
    }

    setFirst(password){
        this.setState({firstPassword:password})
    }

    checkPasswordRequirements(password){
        let regex= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(regex.test(password) && this.state.firstPassword == password){
            this.setState({displayValid: true})
        }
    }
    render(){
        var form = (
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
                                <ListGroup.Item variant = "info">Password must include one special character (#,$,!,@,%,&,*)</ListGroup.Item>
                            </ListGroup>

                            <Form.Group controlId= "formPassword">
                                <Form.Label>Password: </Form.Label>
                                <Form.Control type="password" placeholder="Enter password" onChange = {event => this.setFirst(event.target.value)}/>
                            </Form.Group>
                            <Form.Group controlId= "confirmPassword">
                                <Form.Label>Re-enter Password: </Form.Label>
                                <Form.Control type="password" placeholder="Re-enter password" onChange = {event => this.checkPasswordRequirements(event.target.value)}/>
                            </Form.Group>              
                        </Form>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
        if(this.state.displayValid){
            return(
            <React.Fragment>
                {form}
                <Container>
                    <Row>
                        <Col/>
                        <Col xs={6}>
                            <ListGroup>
                                <ListGroup.Item variant = "success">Passwords are valid and matching</ListGroup.Item>
                            </ListGroup>
                            <Link to="/success">
                                <Button variant="primary" type="submit">Create Account</Button>
                            </Link>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
            </React.Fragment>
            )
            
        }else{
            return(
                <React.Fragment>
                    {form}
                    <Container>
                        <Row>
                            <Col/>
                            <Col xs ={6}>
                                <ListGroup.Item variant = "danger">Passwords are either not valid or matching</ListGroup.Item>
                            </Col>
                            <Col/>
                        </Row>
                    </Container>
                </React.Fragment>
            )
        }
    }
    
}
export default CreateUser