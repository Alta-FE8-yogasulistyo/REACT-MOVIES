import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

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
            <Navbar.Brand href="#home">{this.props.nav1}</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">{this.props.nav2}</Nav.Link>
              <Nav.Link href="#features">{this.props.nav3}</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default Navbars;
