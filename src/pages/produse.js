
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../images/blumenLogo.png'

import { RiHome2Fill } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { IconContext} from "react-icons";
import slide1 from '../images/WhatsApp Image 2022-06-03 at 1.29.38 PM.jpeg';
import slide2 from '../images/Alex 2022-06-02 at 8.41.28 PM.jpeg';
import slide3 from '../images/WhatsApp Image 2022-06-03 at 1.56.16 PM.jpeg';
import hanging from '../images/hanging.png'
import bottom from '../images/bottom.png'
import plant1 from '../images/plant1.png';
import plant2 from '../images/plant2.png';
import plant3 from '../images/plant3.png';
import plant4 from '../images/plant4.png';
import plant5 from '../images/plant5.png';
import plant6 from '../images/plant6.png';
import plant7 from '../images/plant7.png';
import plant8 from '../images/plant8.png';
import plant9 from '../images/plant9.png';
import { Link } from 'react-router-dom';
import '../style/products.css'

import { Pagination } from 'react-bootstrap';
import { useEffect, useState } from 'react';



function Products() {

  const [activePg, setActive] = useState(1)
  const [pages, setPages] = useState()
  
  const db = [
    ['Planta 1', plant1, 'flori'],
    ['Planta 2', plant2, 'arbusti'],
    ['Planta 3', plant3, 'conifere'],
    ['Planta 4', plant4, 'foioase'],
    ['Planta 5', plant5, 'butasi'],
    ['Planta 6', plant6, 'cataratoare'],
    ['Planta 7', plant7, 'aromatice'],
    ['Planta 8', plant8, 'tufe'],
    ['Planta 9', plant9, 'pomisori'],
    ['Planta 10', plant2, 'arbusti'],
    ['Planta 11', plant3, 'conifere'],
    ['Planta 12', plant4, 'foioase'],
    ['Planta 13', plant5, 'butasi'],
    ['Planta 14', plant6, 'cataratoare'],
    ['Planta 15', plant7, 'aromatice'],
    ['Planta 16', plant8, 'tufe'],
    ['Planta 17', plant2, 'flori'],
    ['Planta 18', plant9, 'pomisori'],
    ['Planta 19', plant2, 'arbusti'],
    ['Planta 20', plant3, 'conifere'],
    ['Planta 21', plant4, 'foioase'],
    ['Planta 22', plant5, 'butasi'],
    ['Planta 23', plant6, 'cataratoare'],
    ['Planta 24', plant7, 'aromatice'],
    ['Planta 25', plant8, 'tufe'],
    ['Planta 26', plant9, 'pomisori'],
    ['Planta 27', plant2, 'arbust'],
    ['Planta 28', plant3, 'conifere'],
    ['Planta 29', plant4, 'foioase'],
    ['Planta 30', plant5, 'butasi'],
    ['Planta 31', plant6, 'cataratoare'],
    ['Planta 32', plant7, 'aromatice'],
    ['Planta 33', plant8, 'tufe'],
    ['Planta 34', plant9, 'pomisori']
  ]


  // The Product Parser.
  // It takes the database, slices a page out of it and produces a product
  // information card.
  const ProductParser = () => {
    // There will be 8 items per page.
    const perPage = 8
    let x
    let y
    x = (activePg - 1) * perPage
    y = x + 8
    
    let selection = db.slice(x, y)
    console.log('the slice: ', selection)
    return selection.map(x => {
      return (
        <div key={db.indexOf(x)}>
          <img src={x[1]} className='productPic'>
          </img>          
         
          <div className='description'>
            <h5>
              Pret {Math.round(Math.random() * 100)} Lei
            </h5><hr/>
            <h4>Categoria: {x[2]}</h4><hr />
            <h3>{x[0]}</h3>
          </div>
        </div>
      )
    })
  }
  
  // Creates the pagination, that is the small boxes containing page
  // numbers, each next to each other.
  let active = activePg;
  let items = [];
  let totalPg
  if (db.length % 8 === 0) totalPg = db.length / 8;
  else totalPg = db.length / 8 + 1;
  for (let number = 1; number <= totalPg; number++) {
    items.push(
      <Pagination.Item onClick={(e) => {
        if (number != active) {
        setActive(Number(e.target.text))}
        }}
      key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  const paginationBasic = () => {
    return (
      <div className='pagination'>
        <Pagination>{items}</Pagination>
      </div>
    )
  }
  



  return (
    
    <div className="App">
      
      <Navbar collapseOnSelect className='navbar'
        expand='lg' bg="light" variant='light' sticky='top'>
        <Container className='navContainer'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navItem">
                <Link className='homeIcon' to="/">
                  <IconContext.Provider
                    value={{ color: 'rgb(50, 50, 50)',
                      size: '30px' }}
                      >
                      <RiHome2Fill />
                  </IconContext.Provider>
                </Link>
                <Link className='links' to="/produse">Produse</Link>
                <Link className='links' to="/">Plante la ghiveci</Link>
                <Link className='links' to="#link">Decoratiuni si aranjamente florale</Link>
                <Link className='links' to="#home">Productie proprie</Link>
                <Link className='links' to="#link">Clienti</Link>
                <Link className='links' to="#link">Contact / Impresii</Link>
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

      
      
      <div className='onDisplay'>
        <h1 id='displayTitle'>Produsele Noastre</h1>
        {paginationBasic()}
        <div className='catalogue'>
          {ProductParser()}
        </div>        
        <img src={bottom} className='bottomFrame'></img>
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
          <a href='https://www.freepik.com/vectors/flower-pot'>Flower pot vector created by pch.vector - www.freepik.com</a><br/>          <a href="https://www.freepik.com/vectors/foliage-background">Foliage background vector created by rawpixel.com - www.freepik.com</a>

        </div>
      {/* End of footer. */}  
      </div>
    {/* End of wrapper div.*/}
    </div>
    // End of return.
  );
  // End of function.
}

export default Products;
