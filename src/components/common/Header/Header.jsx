import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
      <header>
          <Container>
              <h1>
                  To Read
              </h1>
              {/* basket */}
          </Container>
          <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className="ms-auto" id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                          <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                      </Nav>
                      <Nav >
                          <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                          <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    </header>
  )
}
