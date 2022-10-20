import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleToSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-4"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/Home" className="nav-link text-dark fw-bold">
              Dragon News
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/Home" className="nav-link p-0">
                  All News
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-link">Pricing</Nav.Link>
            </Nav>
            <Nav className="d-lg-flex align-items-lg-center">
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button onClick={handleToSignOut} className="mx-3 my-0">
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="d-flex">
                      <Nav.Link>
                        <Link to="/login" className="nav-link p-0">
                          Login
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/register" className="nav-link p-0">
                          Register
                        </Link>
                      </Nav.Link>
                    </div>
                  </>
                )}
              </Nav.Link>
              <Nav.Link className="p-0">
                {user?.photoURL ? (
                  <Image
                    src={user.photoURL}
                    roundedCircle
                    style={{ height: "30px" }}
                  ></Image>
                ) : (
                  <FaUserAlt></FaUserAlt>
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
