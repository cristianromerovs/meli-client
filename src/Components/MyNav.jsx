import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const MyNav = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="navbar__custom" expand="lg" expanded={expanded}>
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src="/mercadolibre-logo.png"
            width="134"
            height="34"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className={({ isActive }) => "nav-link " + (isActive && "active")}
              onClick={() => setExpanded(false)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => "nav-link " + (isActive && "active")}
              onClick={() => setExpanded(false)}
            >
              Mi cuenta
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
