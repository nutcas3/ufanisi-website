"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand>Ufanisi Center</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" style={{ flexWrap: "nowrap" }}>
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  <Link href="/about">About</Link>
                </a>
                <a href="causes.html" className="nav-item nav-link">
                  <Link href="/contact">Contact</Link>
                </a>{" "}
                <a className="nav-item nav-link">
                  <Link href="/contact">Contact</Link>
                </a>
                <a className="nav-item nav-link">
                  <Link href="/contact">Contact</Link>
                </a>
                <Button
                  variant="danger"
                  className="order-lg-0 order-1 ms-lg-2">
                  Donate
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
