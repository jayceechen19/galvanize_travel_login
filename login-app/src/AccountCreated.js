import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class AccountCreated extends React.Component{
    constructor(props){
        super(props)
        this.state = props.state
    }
    render(){
        console.log(this.state.serverResponse)
        return(
            <Container>
                <Row>
                    <Col/>
                    <Col xs = {10}>
                        <ListGroup.Item variant = "info">{this.state.serverResponse}</ListGroup.Item>
                        <Link to="/">
                            <Button variant="primary">Back to Homepage</Button>
                        </Link>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
    }
    
}
export default AccountCreated