import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


function Navbar_bootstrap() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to='/'> First </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/Second'> Second </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/Third'> Third </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/Fourth'> Fourth </Link>
            </Nav.Link>
            
          </Nav>
          {/* <ul>
            <li>
                 <Link to='/'>First</Link>  
            </li>
            <li>
                 <Link to='/second'>Second</Link>  
            </li>
            <li>
                 <Link to='/third'>Third</Link>  
            </li>
            <li>
                 <Link to='/fourth'>Fourth</Link>  
            </li>
          </ul> */}
        </Container>
      </Navbar>
      
     
    </>
  );
}

export default Navbar_bootstrap;