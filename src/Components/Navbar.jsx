import React from "react";
import logo from "../images/apple-touch-icon.png";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navbarx = () => (
  <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
    <Container>
      <Navbar.Brand href="/">
      <img src={logo} width="112" class="d-inline-block align-center" alt=""></img>
      Quillom
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/services">Generate Font</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navbarx;
