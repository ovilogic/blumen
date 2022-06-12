
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import '../style/home.css'

import slide1 from '../images/pretty-smiling-lady-gardener-with-redhead-curly-hair-standing-apron-holding-big-garden-scissors-while-happily-looking-camera-outdoors.jpg';
import slide2 from '../images/female-gardener-pruning-plants-flowerpots-outdoors.jpg';
import slide3 from '../images/WhatsApp Image 2022-06-03 at 1.56.16 PM.jpeg';
import hanging from '../images/hanging.png'
import bottom from '../images/bottom.png'
import plant1 from '../images/midDivider.png';
import plant2 from '../images/plant2.png';
import plant3 from '../images/plant3.png';
import plant4 from '../images/plant4.png';
import plant5 from '../images/plant5.png';
import plant6 from '../images/plant6.png';
import plant7 from '../images/plant7.png';
import plant8 from '../images/plant8.png';
import plant9 from '../images/plant9.png';
import { Link } from 'react-router-dom';
import NavPanel from '../navPanel';
import FooterPanel from '../footerPanel';


function Home() {

  
  
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
      <img className="displayItem img-thumbnail" src={x[1]} 
        /><h3>{x[0]}</h3>
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
      
      <NavPanel />

      <Carousel className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            style={{ width: "100%",
                  height: "100%"}}
            
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
                  height: "100%"}}
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
                  height: "100%"}}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Plante la ghiveci pentru balcoane, terase si gradini</h1>
            <h2> precum si 1500 mp accesorii si decoratiuni in domeniu.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='homeDisplay'>
        <h1 id='displayTitle'>Produse Noi</h1>
        <div className="grid-container">  
          {whatsHot()}
        </div>
        <div className='moreHighlights'>
          <Link to='/produse'>
            <button type='button' className='more'>mai multe...</button>
          </Link>
        </div>
     
        <h1 id='displayTitle'>La Oferta</h1>
        <div className="grid-container">  
          {whatsHot()}
        </div>
        <div className='moreHighlights'>
          <Link to='/produse'>
            <button type='button' className='more'>mai multe...</button>
          </Link> 
        </div>
        <img src={bottom} className='bottomFrame'></img>
      </div>

      <FooterPanel />
    {/* End of wrapper div.*/}
    </div>
    // End of return.
  );
  // End of function.
}

export default Home;
