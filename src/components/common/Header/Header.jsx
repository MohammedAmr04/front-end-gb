import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

const { prataRegular } = styles;

export default function Header() {
  return (
    <header className={prataRegular}>
      <Container className="d-flex justify-content-between py-2">
        <ul className="d-flex list-unstyled">
          <li className="mx-3">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li className="mx-3">
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </ul>
        <div className="d-flex" role="button">
          <div className="mx-2">
            <FontAwesomeIcon icon={faUser} className="mx-1" />
            account
          </div>
          <div className="mx-2">
            <FontAwesomeIcon icon={faHeart} className="mx-1" /> loves
          </div>
        </div>
      </Container>
      <hr />
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
