import React, {useState, useEffect} from "react";
import "../Styles/Navigation.css";
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = () => {
    const location = useLocation();
  const [activeLink, setActiveLink] = useState(''); // Track the selected nav item
  const navLinks = ['Property', 'Finance', 'Events', 'About Us', 'Membership'];

  useEffect(() => {
    // Update active link based on the current pathname
    const currentPath = location.pathname.split('/')[1] || 'Property'; 
    setActiveLink(currentPath.charAt(0).toUpperCase() + currentPath.slice(1).replace(/-/g, ' '));
  }, [location]);

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src='logo192.png'
            alt="Logo"
            className="me-2 nav-logo-1club"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          {/* Navigation Links are derived from Link name with lowercase and white spaces become hyphen */}
          <Nav className="me-4 d-flex align-items-center">
            {navLinks.map((item) => (
              <Nav.Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                eventKey={item}
                className= {`navigation-link-item ${activeLink === item ? 'active-nav-item' : ''}`}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>

          <div className="nav-delimiter"></div>

          {/* Book Now Button (Overrided Black variant for now) */}
          <Button
            variant="dark"
            href="/book-now-link-to-be-selected"
            className="fw-bold"
          >
            <div className="nav-button-text">
             Contact Us
            </div>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

