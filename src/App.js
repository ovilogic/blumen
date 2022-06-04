
import { Navbar, Nav, Carousel, Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/blumenLogo.png'
import './style/home.css'
import { RiHome2Fill } from 'react-icons/ri';
import { IconContext } from "react-icons";
import slide1 from './images/WhatsApp Image 2022-06-03 at 1.29.38 PM.jpeg'
import slide2 from './images/Alex 2022-06-02 at 8.41.28 PM.jpeg'
import slide3 from './images/WhatsApp Image 2022-06-03 at 1.56.16 PM.jpeg'


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
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            style={{ width: "100%",
                  height: "800px"}}
            
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Bun Venit!</h1>
            <h2 id='slide1Caption'>
              in paradisul arborilor si arbustilor ornamentali, a decoratiunilor interioare si exterioare</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            style={{ width: "100%",
                  height: "800px"}}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>6 hectare</h1>
            <h2>din care 3 ha neacoperite destinate arborilor si arbustilor ornamentali si 3 ha acoperite</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            style={{ width: "100%",
                  height: "800px"}}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Plante la ghiveci pentru balcoane, terase si gradini</h1>
            <h2> precum si 1500 mp accesorii si decoratiuni in domeniu.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Footer divided in two:
      1. .businessInfo: All the paragraphs and lists except for Copyright.
      2. .copyright. */}
      <div className="footer">
        <div className='businessInfo'>
          <div className='leftHalf'>
            <div className='top'>
              <p>FLORARIE EN-GROS SI DECORATIUNI EN-GROS</p>
              <hr></hr>
              <p>În calitate de angrosist de florărie și angro de decorațiuni, operăm o afacere globală de import pentru furnituri pentru decorațiuni și flori, cadouri, accesorii pentru casă și articole decorative de sezon. Vă transmitem direct condițiile noastre favorabile de cumpărare. În plus, oferim în permanență prețuri mici la rechizite pentru florărie, prețuri speciale săptămânale la articolele actuale de florărie și decor precum și reduceri și promoții. Prin magazinul nostru online puteți cumpăra online gama noastră de rechizite pentru florărie și accesorii pentru casă în toată Europa. Oferim florarilor și decoratorilor inspirație pentru florăria sezonieră, decorațiuni pentru vitrine și multe altele.</p>
            </div>
            <div className='bottom'>
              <p>COMERT CU RIDICATA CU FLORI SI FLORI TAIATE</p>
              <hr></hr>
              <p>În calitate de angrosist de flori, oferim o selecție uriașă de plante în ghivece, plante mediteraneene, plante perene și plante container, plante mari și multe altele. Majoritatea plantelor noastre de așternut și de balcon provin din pepinierele noastre. În piețele noastre de flori angro și prin serviciul nostru de livrare, puteți obține plante sezoniere, plante de balcon, plante de așternut și pepinieră, cum ar fi primule, panseluțe, pelargonii, poinsettias, plante perene și arbori standard direct de la pepinierele noastre din Bavaria, Austria și România.</p>
            </div>
            
          </div>
          <div className='righttHalf'>
            <div className='quarter'>
              <ul>
                <a href='mailto:info@arflora.ro'>
                  &gt; Scrie-ne <br />
                </a>
                <a href='mailto:info@arflora.ro'>
                  &gt; Scrie-ne <br />
                </a>
                <a href='mailto:info@arflora.ro'>
                  &gt; Scrie-ne <br />
                </a>
                <a href='mailto:info@arflora.ro'>
                  &gt; Scrie-ne <br />
                </a>
              </ul>
            </div>
            
          </div>
        </div>
        <div id='copyright'>
          <p>Copyright 2020 © Bayerische Blumen Zentrale GmbH, wholesale for flowers, plants, decorative and florist supplies, own garden centers, Münchner Str. 2a, 85599 Parsdorf near Munich</p>
        </div>
        

        
      </div>
    ` `
  
    </div>
  );
}

export default App;
