/** @format */
import avatar from "../images/avatar.png";
import kid from "../images/kid.png";
import netflix from "../images/netflix.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Navbar className="nav" expand="lg">
    <Navbar.Brand href="#home">
      <img src={netflix} alt="netflix logo" height="46" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/tvshows">
          TV Shows
        </Link>
        <Nav.Link href="#link">Recently Added</Nav.Link>
        <Nav.Link href="#link">My list</Nav.Link>
        <NavDropdown className="dropDown" title="Genre" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Sci-Fi</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <div>
        <i className="bi bi-search mx-3 text-white"></i>
        <i className="bi bi-bell-fill mx-3 text-white"></i>
      </div>
      <img className="mr-4" src={avatar} alt="avatar" width="35" height="35" />
      <img src={kid} alt="avatar" width="35" height="35" />
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
