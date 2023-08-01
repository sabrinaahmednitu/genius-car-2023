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
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="top"
          // style={{
          //   backgroundColor: ' rgb(135, 133, 235)',
          // }}
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
                {user && (
                  <>
                    <Nav.Link href="/addservice">Add Service</Nav.Link>
                    <Nav.Link href="/manageservices">Manage Services</Nav.Link>
                  </>
                )}
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