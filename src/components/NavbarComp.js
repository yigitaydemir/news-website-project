import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <div className='container'>
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Trending News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='nav-link active'>Home</Link>
            <Link to="/business" className='nav-link active'>Business</Link>
            <Link to="/entertainment" className='nav-link active'>Entertainment</Link>
            <Link to="/science" className='nav-link active'>Science</Link>
            <Link to="/sports" className='nav-link active'>Sports</Link>
            <Link to="/technology" className='nav-link active'>Technology</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarComp;