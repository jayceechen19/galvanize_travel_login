import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginSuccess extends React.Component{
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
                    <Col>
                        <ListGroup.Item variant = "info">{this.state.serverResponse}</ListGroup.Item>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
    }
}
export default LoginSuccess