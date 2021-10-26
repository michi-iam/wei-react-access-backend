
import React from 'react'; 
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

class MeineNavbar extends React.Component {


    render() {
        return <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <NavDropdown title="Posts" id="basic-nav-dropdown">
                <NavDropdown.Item href="/posts">Posts</NavDropdown.Item>
                <NavDropdown.Item href="/addnewpost">neuer Post</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
   
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    }

}


export default MeineNavbar;