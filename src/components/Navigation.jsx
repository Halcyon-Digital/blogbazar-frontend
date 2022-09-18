import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import LOGO from "../assets/images/logo.png";
import { AiOutlineUser } from "react-icons/ai";

function Navigation() {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="shadow"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home">
            <img
              src={LOGO}
              style={{ width: "200px" }}
              alt="blog bazar logo"
              title="Blog Bazar"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Pricing
              </Nav.Link>
              <NavDropdown title="Tag" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/blogs?hashlink=lifestyle">
                  Lifestyle
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs?hashlink=music">
                  Music
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs?hashlink=travel">
                  Travel
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs?hashlink=technology">
                  Technology
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs?hashlink=health">
                  Health
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/profile">
                <AiOutlineUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
