import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useHistory } from 'react-router-dom';
import ErrorMessage from '../../components/error';
import Loading from '../../components/loading';
import Mainscreen from '../../components/Mainscreen';
import './loginpage.css'
 const Loginpage=()=> {
  const history=useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const userInfo=localStorage.getItem('userInfo')
    if (userInfo){
        history.push('/mynotes')
    }
  },[history])
  const handleSubmit=async(event)=> {
    event.preventDefault();
    try {
        const config={
            headers:{
                'Content-Type': 'application/json'
              }
        }
        setError(false)
        setLoading(true)
        const {data}=await axios.post("/api/user/login",{email,password},config)
        localStorage.setItem('userInfo',JSON.stringify(data))
        console.log(data,"sdsf");
        setLoading(false)
        history.push('/mynotes')

    } catch (error) {
        setError(error.response.data.message)
        setLoading(false)
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <Mainscreen title="LOGIN">
        <div className="loginContainer">
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {loading && <Loading/>}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email"
        placeholder="Enter email"
        onch
        value={email}
        onChange={handleEmailChange}
         />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
         type="password"
         placeholder="Password"
         value={password}
         onChange={handlePasswordChange}
          />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Row className="py-3">
        <Col>
        New Customer ? <Link to='/register'>Register</Link></Col>
    </Row>
    </div>
    </Mainscreen>

  )
}

export default Loginpage