import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
  <>
  <Navbar bg="warning" variant="light">
    <Container>
    <Navbar.Brand href="#home"><img
          alt=""
          src="https://github.com/AZ1X/React-Weather-App-V2/blob/59b6a44c745075b0c3647b6889f919bb1a18de61/weatherapp/public/icons/sunny.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}Weather App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
    </div>
  );
}

export default App;
