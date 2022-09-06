import React from "react";
import "../Navbar/navbar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              className="navImg"
              src={require("../../img/7c7aa88fb91bb71dd3169fe04e074d60.jpg")}
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <div className="inputs d-flex">
                <input className="form-control" type="text" />
                {/* <i className="fas fa-search"></i> */}
                <Button variant="primary">
                  <i className="fas fa-search"></i>
                </Button>
              </div>
            </Nav.Link>
            <Nav.Link href="#link">
              <div className="user">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="fas fa-user"></i>
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body d-flex">
                        <button className="btn btn-primary">
                          <Link to="/Login">Login</Link>
                        </button>
                        <button className="btn btn-primary">Register</button>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-cart"></i>
              </div>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
