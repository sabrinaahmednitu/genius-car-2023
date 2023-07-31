import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../imags/logo-black.png'
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
    return (
      <div className="container">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} height="30px" alt=""></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home#services">Services</Nav.Link>
                <Nav.Link href="home#experts">Experts</Nav.Link>
                <Nav.Link as={Link} to="about">
                  About
                </Nav.Link>
              </Nav>
              <Nav>
                {/* <Nav.Link as={Link} to="about">
                  About
                </Nav.Link> */}
                {user ? (
                  <button onClick={handleSignOut} className="btn btn-info">
                    Sign Out
                  </button>
                ) : (
                  <Nav.Link as={Link} to="login">
                    {' '}
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;