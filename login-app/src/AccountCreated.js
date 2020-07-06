import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

function AccountCreated(){
    return(
        <Container>
            <Row>
                <Col/>
                <Col>
                    <h4>Account successfully created.</h4>
                    <Link to="/">Back to Homepage</Link>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}
export default AccountCreated