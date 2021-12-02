import {Navbar, Nav, Container} from 'react-bootstrap';
import Page from './components/Page';

function App() {
  return (
    <div>
  <>
  <Navbar bg="warning" variant="light">
    <Container fluid >
    <Navbar.Brand href="#home"><img
          alt=""
          src="icons/sunny.png"
          width="32"
          height="32"
          className="d-inline-block align-top"
        />{' '}Weather App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">None</Nav.Link>
      <Nav.Link href="#features">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>       
  </>
  <br />
  <div className="App">
    <Container style={{padding:20, bottom:20}}>
      <Page />
    </Container>
  </div>
  <br />
  </div>
  );
}

export default App;
