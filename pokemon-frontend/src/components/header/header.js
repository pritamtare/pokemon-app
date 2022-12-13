import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand ><Link  className="text-light" to="/">Pokemon App</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Link to="/login">Login</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header