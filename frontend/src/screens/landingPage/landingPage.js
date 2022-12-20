import React from 'react'
import { Button, Container, Row,Link } from 'react-bootstrap'
import './landing.page.css'

export default function LandingPage() {
  return (
    <div className="main">
      <Container>
      <Row>
      <div className='intro-text'>
        <div>
          <h1 className='title'>Welcome To Note Zipper</h1>
          <p className='subtitle'>One safe place for all your note.</p>
        </div>
        <div className="buttonContainer">
              <a  href="#">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a  href='#'>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </a>
            </div>
      </div>
      </Row>
      </Container>
    </div>
  )
}
