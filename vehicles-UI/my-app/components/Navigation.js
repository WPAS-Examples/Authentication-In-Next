import { Container, Navbar, Nav } from "react-bootstrap";
import Link from 'next/link';

export default function Navigation(props) {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/" >Vehicles UI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/" >Home</Nav.Link>
            <Nav.Link as={Link} href="/vehicles">Vehicles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}