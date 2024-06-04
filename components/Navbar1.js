import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Form, FormControl, Button,NavDropdown } from 'react-bootstrap'; 
import { FaSearch } from 'react-icons/fa'; // Import search icon
import { FaBars } from 'react-icons/fa'; // Import hamburger icon

import "./Navbar1.css"
const Navbar1 = () => {
  return (
    <div>


<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="svg"
            src={require('./mysvg.svg').default}
            width="100"
            height="100"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Search</Nav.Link>
            <Nav.Link href="#location">Location</Nav.Link>
            <Nav.Link href="#notification">Notification</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>










      
    </Navbar>
    </div>
  )
}

export default Navbar1