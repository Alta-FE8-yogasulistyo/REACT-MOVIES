import React from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";

export const Container1 = React.createContext();
const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>MoviesVerse</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Now Playing</Nav.Link>
          <Nav.Link href="/Favorit">Favorit</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control type="text" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
