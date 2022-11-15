import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faHome,
  faPlus,
  faSearch,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

const NavMain = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));
  // console.log(user)

  function logoutt() {
    localStorage.clear();
    navigate("/login");
  }



  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand style={{'font-family':'cursive', 'font-weight':'bold', 'margin-right':'50px', 'color':'#445ca6'}}>Student Info</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <li className="navlist">
                  <Link to="/">
                    <FontAwesomeIcon className="i" icon={faHome} />
                    Home
                  </Link>
                </li>
              </Nav.Link>

              <Nav.Link>
                <li className="navlist">
                  <Link to="/list">
                    <FontAwesomeIcon  className="i" icon={faList} />
                    List
                  </Link>
                </li>
              </Nav.Link>
              <Nav.Link>
                <li className="navlist">
                  <Link to="/search">
                    <FontAwesomeIcon className="i" icon={faSearch} />
                    Search
                  </Link>
                </li>
              </Nav.Link>

              {localStorage.getItem("user-info") ? (
                <>
                  <Nav.Link>
                    <li className="navlist">
                      <Link to="/create">
                        <FontAwesomeIcon className="i" icon={faPlus} />
                        Create
                      </Link>
                    </li>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <li className="navlist">
                      <Link to="/register">
                        <FontAwesomeIcon className="i" icon={faUser} />
                        Register
                      </Link>
                    </li>
                  </Nav.Link>
                  <Nav.Link>
                    <li className="navlist">
                      <Link to="/login">
                        <FontAwesomeIcon className="i" icon={faLock} />
                        Login
                      </Link>
                    </li>
                  </Nav.Link>
                </>
              )}
            </Nav>
            {localStorage.getItem("user-info") ? (
              <Nav>
                <NavDropdown title={user && user.name}>
                  <NavDropdown.Item onClick={logoutt}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMain;
