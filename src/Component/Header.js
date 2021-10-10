import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Button } from "@mui/material";

function Header() {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Promote Any Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>
                <Link to='/' style={{ textDecorationLine: "none" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/services' style={{ textDecorationLine: "none" }}>
                  Services
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>
                <Link
                  to='/brand'
                  style={{ textDecorationLine: "none", color: "white" }}
                >
                  <Button variant='contained'>I'm Brand</Button>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                <Link
                  to='/influencer'
                  style={{ textDecorationLine: "none", color: "white" }}
                >
                  <Button variant='contained'>I'm Influencer</Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
