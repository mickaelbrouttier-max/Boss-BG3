import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarone() {
  return (
    <Navbar expand="lg" className="navbar-fantasy" variant="dark">
      <Container className="navcontainer">
        <Navbar.Brand href="#home" className="brand-glow">
          Bouka
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Accueil</Nav.Link>
          <Nav.Link href="#features">Les boss</Nav.Link>
          <Nav.Link href="#pricing">Les Compagnons</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBarone;