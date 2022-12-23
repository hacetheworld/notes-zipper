import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { logout } from '../../actions/userAction'
export default function Header() {
  const history=useHistory()
  const dispatch=useDispatch();
  const logoutHandler=()=>{
    dispatch(logout())
    history.push('/mynotes')
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>

      <Navbar.Brand>
        <Link to='/'>Note Zipper</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
        <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
        </Nav>
        <Nav>
            <>
              <Nav.Link href='/mynotes'>
                <Link to='/mynotes'>My Notes</Link>
                </Nav.Link>
              <NavDropdown
                title="user"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  {/* <img
                    alt=""
                    src={`${userInfo.pic}`}
                    width="25"
                    height="25"
                    style={{ marginRight: 10 }}
                  /> */}
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
            <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
