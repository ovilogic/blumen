
import 'bootstrap/dist/css/bootstrap.min.css'

import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { IconContext} from "react-icons";

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
import { useState } from 'react';

import NavPanel from '../navPanel';
import FooterPanel from '../footerPanel';



function Products() {

  const [activePg, setActive] = useState(1)
  
  
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
          
           <Link to={'/' + x[0].replace(/\s/g, '')} >
            <img src={x[1]} className='productPic'></img>   
           </Link>
               
         
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
      key={number} active={number === active} className='pagButton'>
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
      <NavPanel />
      
      <div className='onDisplay'>
        <h1 id='displayTitle'>Produsele Noastre</h1>
        {paginationBasic()}

        {/* Side navigation bar */}
        <div class="sidenav">
          <a href="#about">flori</a>
          <a href="#services">butasi</a>
          <a href="#clients">arbusti</a>
          <a href="#contact">accesorii</a>
        </div>

        <div className='catalogue'>
          {ProductParser()}
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

export default Products;
