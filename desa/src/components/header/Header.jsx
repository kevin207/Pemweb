import React from "react";
import "./header.css";
import { LinkContainer } from "react-router-bootstrap";

// Bootstrap Depedencies
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  return (
    <>
      <Navbar key="lg" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/" className="brand-color">
            Desa Babadan
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="/">
                  <Nav.Link>Beranda</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/profil">
                  <Nav.Link>Profil</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/layanan">
                  <Nav.Link>Pelayanan</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/wisata">
                  <Nav.Link>Wisata</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/potensi">
                  <Nav.Link>Potensi</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/bumdes">
                  <Nav.Link>BUMDes</Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
