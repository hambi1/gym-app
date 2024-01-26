import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

function NavbarNav() {
  // const [buttonChange, setButtonChange] = useState(null);
  // function changeButton() {
  //   buttonChange ? setButtonChange(null) : setButtonChange("change");
  // }

  return (
    <>
      <div className="container-fluid">
        {" "}
        <Navbar expand="lg" className="bg-dark-subtle" fixed="top">
          <Container fluid dir="rtl" className="container-fluid">
            <Navbar.Brand>oxygen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-dark mx-md-2 d-block d-md-flex"
                    to="/"
                  >
                    {" "}
                    خانه{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-dark mx-md-2 d-block d-md-flex"
                    to="/awards"
                  >
                    {" "}
                    افتخارات{" "}
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-dark mx-md-2 d-block d-md-flex"
                    to="/services"
                  >
                    {" "}
                    خدمات{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-dark mx-md-2 d-block d-md-flex"
                    to="/glary"
                  >
                    {" "}
                    گالری{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-dark mx-md-2 d-block d-md-flex"
                    to="/trainers"
                  >
                    {" "}
                    مربی ها{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-dark mx-md-2 d-block d-md-flex"
                    to="/plans"
                  >
                    {" "}
                    پلن ها{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    className="text-dark mx-md-2 d-block d-md-flex"
                    to="/contact-us"
                  >
                    {" "}
                    ارتباط با ما{" "}
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </>
  );
}

export default NavbarNav;
