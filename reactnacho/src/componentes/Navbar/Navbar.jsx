import Cartwidget from '../Cartwidget/Cartwidget';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar= () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">OTTA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/categoria/yerbas">Yerbas</Nav.Link>
            <Nav.Link href="/categoria/mates">Mates</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart"><Cartwidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;




