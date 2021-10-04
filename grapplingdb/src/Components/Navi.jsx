import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navi() {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
  <Container>
    <Navbar.Brand href="/">Grappling DB</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">        
        <NavDropdown title="Gi" id="basic-nav-dropdown">
          <NavDropdown.Item href="/gi/standing">Standing</NavDropdown.Item>
          <NavDropdown.Item href="/gi/open-guard">Open Guard</NavDropdown.Item>
          <NavDropdown.Item href="/gi/closed-guard">Closed Guard</NavDropdown.Item>
          <NavDropdown.Item href="/gi/half-guard">Half Guard</NavDropdown.Item>
          <NavDropdown.Item href="/gi/side-control">Side Control</NavDropdown.Item>
          <NavDropdown.Item href="/gi/knee-on-belly">Knee on Belly</NavDropdown.Item>
          <NavDropdown.Item href="/gi/mount">Mount</NavDropdown.Item>
          <NavDropdown.Item href="/gi/rear-mount">Rear Mount</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/gi/guard-passes">Guard Passes</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="No-Gi" id="basic-nav-dropdown">
        <NavDropdown.Item href="/no-gi/standing">Standing</NavDropdown.Item>
          <NavDropdown.Item href="/no-gi/open-guard">Open Guard</NavDropdown.Item>
          <NavDropdown.Item href="/no-gi/closed-guard">Closed Guard</NavDropdown.Item>
          <NavDropdown.Item href="/no-gi/half-guard">Half Guard</NavDropdown.Item>
          <NavDropdown.Item href="/no-gi/side-control">Side Control</NavDropdown.Item>
          <NavDropdown.Item href="/no-gi/knee-on-belly">Knee on Belly</NavDropdown.Item>
          <NavDropdown.Item href="/no-gi/mount">Mount</NavDropdown.Item>
          <NavDropdown.Item href="/no-gi/rear-mount">Rear Mount</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/no-gi/guard-passes">Guard Passes</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/sc">Strength and Conditioning</Nav.Link>
        <Nav.Link href="/nutrition">Nutrition</Nav.Link>
        <Nav.Link href="/philosophy">Philosophy</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>        
      </Nav>
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Zachary Rehbein</a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}

export default Navi;