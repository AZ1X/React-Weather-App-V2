import {Navbar, Nav, Container,} from 'react-bootstrap';
import Page from './components/Page';

function App() {
  return (
    <div>
  <>
  <Navbar bg="warning" variant="light">
    <Container fluid>
    <Navbar.Brand href="#home"><img
          alt=""
          src="icons/sunny.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}<strong>LLZ Weather</strong></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">None</Nav.Link>
      <Nav.Link href="#features">Contact</Nav.Link>
    </Nav>
  
    </Container>
  </Navbar>       
  </>
  <br />
  <div className="App">
    <Container style={{padding:15, bottom:20}}>
      <Page />
    </Container>
  </div>
  <br />
  </div>
  );
}

export default App;
