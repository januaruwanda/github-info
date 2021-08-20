import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Github-info App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <Container>
        <div>
          <h1>Repository</h1>
        </div>
        <SearchBar />
      </Container>
      
    </div>
  );
}

export default App;
