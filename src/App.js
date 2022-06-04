
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/blumenLogo.png'
import './style/home.css'
import { RiHome2Fill } from 'react-icons/ri';
import { IconContext } from "react-icons";


function App() {



  return (
    <div className="App">
      
      <Navbar collapseOnSelect className='navbar'
        expand='lg' bg="light" variant='light' sticky='top'>
        <Container className='navContainer'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navItem">
                <Nav.Link className='homeIcon' href="#home">
                  <IconContext.Provider
                    value={{ color: 'rgb(50, 50, 50)',
                     size: '30px' }}
                      >
                      <RiHome2Fill />
                  </IconContext.Provider>
                </Nav.Link>
                <Nav.Link href="#link">Pepiniera</Nav.Link>
                <Nav.Link href="#home">Plante la ghiveci</Nav.Link>
                <Nav.Link href="#link">Decoratiuni si aranjamente florale</Nav.Link>
                <Nav.Link href="#home">Productie proprie</Nav.Link>
                <Nav.Link href="#link">Clienti</Nav.Link>
                <Nav.Link href="#link">Contact / Impresii</Nav.Link>
              </Nav>
            
          </Navbar.Collapse>
        </Container> 
        <Navbar.Brand href="#home" className='navLogo'>
             <h3><em>AR flora</em></h3>
          <img
                src={logo}
                alt="brand logo"
                style={{ width: "60px",
                  height: "50px"}}
                className="d-inline-block align-bottom"
              />{'        '}
            </Navbar.Brand>
      </Navbar><br />

      
  
      

  
    </div>
  );
}

export default App;
