import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import withRouter from "../withRouter";

class Navbars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Now Playing</Nav.Link>
              <Nav.Link href="#features">Favorit</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default withRouter(Navbars);
