import React from 'react';
import { Link} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateUser extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            ...props.state,
            firstPassword: "",
            validUsername: false,
            validPassword: false
        }
        this.changeState = props.method
        this.enteredUsername = ''
        this.enteredPassword = ''

        this.setFirst = this.setFirst.bind(this)
        this.checkPasswordRequirements = this.checkPasswordRequirements.bind(this)
        this.checkUsernameRequirements = this.checkUsernameRequirements.bind(this)
    }

    setFirst(password){
        this.setState({firstPassword:password})
    }
    checkUsernameRequirements(username){
        let regex = new RegExp("^(?=.*[a-zA-Z0-9])(?=.{4,})");
        if(regex.test(username)){
            this.setState({validUsername: true })
        }
    }

    checkPasswordRequirements(password){
        let regex= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        console.log(this.state.firstPassword)
        console.log(password)
        if(regex.test(password) && this.state.firstPassword == password){
            this.setState({validPassword: true})
        }
    }

    async submitButton() {
        var data = {
            "username": this.enteredUsername,
            "password": this.enteredPassword
        }
     
        const response = await fetch('http://localhost:3002/register', {
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
        
        var form = (
            <Container>
                <Row>
                    <Col/>
                    <Col xs = {8}>
                        <Form>
                            <ListGroup>
                                <ListGroup.Item variant = "info">Username must start with a letter</ListGroup.Item>
                                <ListGroup.Item variant = "info">Username can only have letters and numbers</ListGroup.Item>
                            </ListGroup>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username: </Form.Label>
                                <Form.Control type="text" placeholder="Enter username" onChange = {event =>{
                                    this.checkUsernameRequirements(event.target.value)
                                    this.enteredUsername = event.target.value
                                }}/>
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
                                <Form.Control type="password" placeholder="Enter password" onChange = {event => {
                                    this.setFirst(event.target.value)
                                    }}/>
                            </Form.Group>
                            <Form.Group controlId= "confirmPassword">
                                <Form.Label>Re-enter Password: </Form.Label>
                                <Form.Control type="password" placeholder="Re-enter password" onChange = {event => {
                                    this.checkPasswordRequirements(event.target.value)
                                    this.enteredPassword = event.target.value
                                }}/>
                            </Form.Group>              
                        </Form>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
        var invalidPassword = (
            <Container>
                <Row>
                    <Col/>
                    <Col xs ={8}>
                        <ListGroup.Item variant = "danger">Passwords are either not valid or matching</ListGroup.Item>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
        var invalidUsername = (
            <Container>
                <Row>
                    <Col/>
                    <Col xs ={8}>
                        <ListGroup.Item variant = "danger">Username is not valid</ListGroup.Item>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
        if (!this.state.validPassword && this.state.validUsername){
            return(
                <React.Fragment>
                    {form}
                    {invalidPassword}
                </React.Fragment>
            )
        }else if (!this.state.validUsername && this.state.validPassword){
            return(
                <React.Fragment>
                    {form}
                    {invalidUsername}
                </React.Fragment>
            )
        }else if (!this.state.validUsername && !this.state.validPassword){
            return(
                <React.Fragment>
                {form}
                {invalidUsername}
                {invalidPassword}
                </React.Fragment>
            )
    }else{
        return(
        <React.Fragment>
            {form}
            <Container>
                <Row>
                    <Col/>
                    <Col xs={8}>
                        <ListGroup>
                            <ListGroup.Item variant = "success">Passwords are valid and matching</ListGroup.Item>
                        </ListGroup>
                        <Link to="/success" onClick = {event => this.submitButton()}>
                            <Button variant="primary" type="submit">Create Account</Button>
                        </Link>
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