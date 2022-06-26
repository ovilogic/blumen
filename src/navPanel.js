import { Navbar, Nav, Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/blumenLogo.png'

import { RiHome2Fill } from 'react-icons/ri';
import { IconContext} from "react-icons";

import { Link } from 'react-router-dom';

import './style/navPanel.css'

const NavPanel = () => {
    return ( 
        <Navbar collapseOnSelect className='navbar'
            expand='lg' bg="light" variant='light' >
            <Container className='navContainer' >
              <Navbar.Toggle  />
              <Navbar.Collapse >
                <Nav className="me-auto navItem bg-light">
                    <Link className='homeIcon' to="/">
                      <IconContext.Provider
                        value={{ color: '#209A32',
                          size: '30px' }}
                          >
                          <RiHome2Fill />
                      </IconContext.Provider>
                    </Link>
                    <Link className='links' to="/produse">Produse</Link>
                    <Link className='links' to="/">Plante la ghiveci</Link>
                    <Link className='links' to="#link">Decoratiuni si aranjamente florale</Link>
                    <Link className='links' to="#home">Productie proprie</Link>
                    <Link className='links' to="/clienti">Clienti</Link>
                    <Link className='links' to="/contact">Contact / Impresii</Link>
                  </Nav>
              </Navbar.Collapse>
            </Container> 
            <Navbar.Brand href="/" className='navLogo'>
                <h3 id='logoName'><em>AR flora</em></h3>
              <img
                    src={logo}
                    alt="brand logo"
                    style={{ width: "60px",
                      height: "50px"}}
                    className="d-inline-block align-bottom"
                  />{'        '}
                </Navbar.Brand> 
            {/* <img src={hanging} className='hanging'></img> */}
          </Navbar>
     );
}
 
export default NavPanel;