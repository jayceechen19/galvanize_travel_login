import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginResult extends React.Component{
    constructor(props){
        super(props)
        this.state = props.state
    }
    
    render(){
        console.log(this.state.serverResponse)
        if(this.state.serverResponse.includes('does not exist')){
            return(
                <Container>
                <Row>
                    <Col/>
                    <Col xs = {10}>
                        <ListGroup.Item variant = "danger">Incorrect credentials or user does not exist</ListGroup.Item>
                        
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    <Link to="/">
                        <Button variant="primary">Back to Homepage</Button>
                    </Link>
                </Row>

            </Container>
            )
        }else{
            return(
                <Container>
                    <Row>
                        <Col/>
                        <Col xs = {10}>
                            <ListGroup.Item variant = "info">{this.state.serverResponse}</ListGroup.Item>
                            {' '}
                            <Link to="/">
                                <Button variant="success">Logout</Button>
                            </Link> 
                        </Col>
                        <Col/>
                    </Row>
                </Container>
            )
        }        
    }
}
export default LoginResult