
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/blumen.jpg'
import './style/home.css'


function App() {
  return (
    <div className="App">
      
      <Navbar bg="success" variant='light'>
         <Container>
          <Navbar.Brand className='text-white' href="#home">
              <img
                src={logo}
                alt="brand logo"
                style={{ width: "30px",
                  height: "30px"}}
                className="d-inline-block align-top"
              />{'        '}
            AR flora</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='navlinks'>
              <Nav className="me-auto">
                <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                <Nav.Link className='text-white' href="#link">Pepiniera</Nav.Link>
                <Nav.Link className='text-white' href="#home">Plante la ghiveci</Nav.Link>
                <Nav.Link className='text-white' href="#link">Decoratiuni si aranjamente florale</Nav.Link>
                <Nav.Link className='text-white' href="#home">Productie proprie</Nav.Link>
                <Nav.Link className='text-white' href="#link">Clienti</Nav.Link>
                <Nav.Link className='text-white' href="#link">Contact/Impresii</Nav.Link>
              </Nav>
              </div>
          </Navbar.Collapse>
        </Container> 
      </Navbar><br />
  
      

  
    </div>
  );
}

export default App;
