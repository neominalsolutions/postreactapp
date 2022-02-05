import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Outlet} from 'react-router';

function Layout() {
  return <div>

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link> */}
              <Link className="nav-link" to="/home">Anasayfa</Link>
            {/* </Nav.Link> */}
            {/* <Nav.Link> */}
              <Link className="nav-link" to="posts">Makaleler</Link>
            {/* </Nav.Link> */}
            {/* <Nav.Link> */}
              <Link className="nav-link" to="/login">Oturum Aç</Link>
            {/* </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
      <Outlet />
    </Container>

  </div>;
}

export default Layout;
