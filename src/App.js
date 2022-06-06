
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './images/blumenLogo.png'
import './style/home.css'
import { RiHome2Fill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { IconContext} from "react-icons";
import slide1 from './images/WhatsApp Image 2022-06-03 at 1.29.38 PM.jpeg';
import slide2 from './images/Alex 2022-06-02 at 8.41.28 PM.jpeg';
import slide3 from './images/WhatsApp Image 2022-06-03 at 1.56.16 PM.jpeg';
import plant1 from './images/plant1.png';
import plant2 from './images/plant2.png';
import plant3 from './images/plant3.png';
import plant4 from './images/plant4.png';
import plant5 from './images/plant5.png';
import plant6 from './images/plant6.png';
import plant7 from './images/plant7.png';
import plant8 from './images/plant8.png';
import plant9 from './images/plant9.png';


function App() {

  
  const hotObj = [
    
    ['Planta 2', plant2],
    ['Planta 3', plant3],
    ['Planta 4', plant4],
    ['Planta 5', plant5],
    ['Planta 6', plant6],
    ['Planta 7', plant7],
    ['Planta 8', plant8],
    ['Planta 9', plant9]
  ]
  const whatsHot = () => {
    return hotObj.map(x => {
    return (
    <div key={hotObj.indexOf(x)}>
      <img className="displayItem" src={x[1]} /><p>{x[0]}</p>
    </div>)}
    )
  }

  return (
    // body has 4 main elements:
    // 1.Navbar
    // 2. Carousel
    // 3. On Display
    // 4. Footer
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
             <h3 id='logoName'><em>AR flora</em></h3>
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

      <div className='onDisplay'>
        <h1 id='displayTitle'>Produse Noi</h1>
        <div className="grid-container">  
          {whatsHot()}
        </div>
        <div className='moreHighlights'>
          <button type='button' className='more'>mai multe...</button>
        </div>
      </div>

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

          <div className='rightHalf'>
            <p>CONTACTATI-NE</p>
            <hr></hr>
            <ul>
              <li><a href='mailto:info@arflora.ro'>
                <IconContext.Provider value={{ size: '22px'}}>
                  <AiOutlineMail />
                </IconContext.Provider>
                
              </a> info@arflora.ro
              </li>
              <li> <IconContext.Provider value={{ size: '22px'}}>
                <BsTelephone />
              </IconContext.Provider> +40/257/381870</li>
            
              <li> <IconContext.Provider value={{ size: '22px'}}>
                <FaMobileAlt />
              </IconContext.Provider> +40722349066 </li>
              <li> <IconContext.Provider value={{ size: '22px'}}>
                <BiMap />
              </IconContext.Provider> Sinleani, nr. 359, jud. Arad</li>

              <hr/>

              <li>
                <a href='https://www.blumenzentrale.de'>
                  Bayerische Blumen Zentrale
                </a>{' '}
                <a href='mailto:info@blumenzentrale.de'>
                <IconContext.Provider value={{ size: '22px'}}>
                  <AiOutlineMail />
                </IconContext.Provider>
                </a> 
              </li>
              
              <li>
                <a href='http://blumenzentrale.de'>
                Blumen Zentrale Lindau
              </a>{' '}
                <a href='mailto:lindau@blumenzentrale.de'>
                <IconContext.Provider value={{ size: '22px'}}>
                  <AiOutlineMail />
                </IconContext.Provider>
                </a> 
              </li>

              <li><a href='http://blumenzentrale.de'>
                Blumen Zentrale Straubing
              </a>{' '}
                <a href='mailto:straubing@blumenzentrale.de'>
                <IconContext.Provider value={{ size: '22px'}}>
                  <AiOutlineMail />
                </IconContext.Provider>
                </a> 
              </li>

              <li><a href='http://www.salzachblume.at'>
                Slazachblume
              </a>{' '}
                <a href='mailto:info@salzachblume.at'>
                <IconContext.Provider value={{ size: '22px'}}>
                  <AiOutlineMail />
                </IconContext.Provider>
                </a> 
              </li>

              <li><a href='http://donaublume.com'>
                Donaublume
              </a> {' '}
                <a href='mailto:info@donaublume.com'>
                <IconContext.Provider value={{ size: '22px'}}>
                  <AiOutlineMail />
                </IconContext.Provider>
                </a> 
              </li>

              <li><a href='http://www.dunavirag.hu'>
                Dunavirag Centrum
              </a> {' '}
                <a href='mailto:info@dunavirag.hu'>
                <IconContext.Provider value={{ size: '22px'}}>
                  <AiOutlineMail />
                </IconContext.Provider>
                </a> 
              </li>
            </ul>
          </div>
        {/*End of businessInfo.  */}
        </div>
        {/* copyright is a div so it will naturally go under. */}
        <div id='copyright'>
          <p>Copyright 2022 © AR flora</p>
          <a href="https://www.freepik.com/vectors/hand-drawing">Hand drawing vector created by rawpixel.com - www.freepik.com</a><br/>
          <a href='https://www.freepik.com/vectors/flower-pot'>Flower pot vector created by pch.vector - www.freepik.com</a>
        </div>
      {/* End of footer. */}  
      </div>
    {/* End of wrapper div.*/}
    </div>
    // End of return.
  );
  // End of function.
}

export default App;
