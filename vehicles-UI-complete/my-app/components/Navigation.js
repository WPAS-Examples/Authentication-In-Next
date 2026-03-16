import { Container, Navbar, Nav } from "react-bootstrap";
import Link from 'next/link';
import { useRouter } from "next/router";
import { readToken, removeToken } from "@/lib/authenticate";

export default function Navigation(props) {

  const router = useRouter();
  let token = readToken();

  function logout() {
    removeToken();
    router.push("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/" >Vehicles UI {token && <>- Welcome {token.userName}</>}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            {token && <Nav.Link as={Link} href="/vehicles">Vehicles</Nav.Link>}
          </Nav>
          <Nav className="ml-auto">
            {!token && <Nav.Link as={Link} href="/login">Login</Nav.Link>}
            {token && <Nav.Link onClick={logout}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}