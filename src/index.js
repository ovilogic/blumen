import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Products from './pages/produse.js';
import NoPage from './pages/NoPage';

import 'bootstrap/dist/css/bootstrap.min.css'

import plant1 from './images/plant1.png';
import plant2 from './images/plant2.png';
import plant3 from './images/plant3.png';
import plant4 from './images/plant4.png';
import plant5 from './images/plant5.png';
import plant6 from './images/plant6.png';
import plant7 from './images/plant7.png';
import plant8 from './images/plant8.png';
import plant9 from './images/plant9.png';



import NavPanel from './navPanel.js';
import FooterPanel from './footerPanel.js';

import './style/index.css'

import Card from 'react-bootstrap/Card';
import Clients from './pages/clienti.js';
import Contact from './pages/contact.js';



export default function App() {

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

  


  const ProductPage = () => {
    return db.map(x => {
      return (
        <Route key={db.indexOf(x)}
         path={'/' + x[0].replace(/\s/g, '')} element={<div>

          <NavPanel />

          <div className='productDisplay'>
            
            <img className='picture' src={x[1]}></img>     
            <div className='infoBox'>
              <Card className='card' bg='light' style={{ maxWidth: '45vw' }}>
                <Card.Body>
                  <Card.Title>{x[0]}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{x[2]}</Card.Subtitle>
                  <Card.Text>
                    Magnolia stellata (Sieb. Et Zucc.) Maxim. , (Magnolie), este o specie de plant?? care cre??te sub form?? de arbore cu lujerii p??ro??i sau arbust ??nalt de cca. 3,5 m. Face parte din genul Magnolia L., familia Magnoliaceae.
                    Frunzele sunt invers-ovate, ??i au cca. 8 cm lungime.
                    Florile sunt albe, mirositoare, duble, cu numeroase petale oblong-liniare ce se deschid ??n form?? de stea ??i apar prim??vara devreme, ??nainte de ??nfrunzire.
                    Fructul este compus. Se ??nmul??e??te prin semin??e ??i pe cale asexuat?? prin marcotaj sau prin altoire, ??n soluri fertile. Se planteaz?? ??n parcuri ??i gr??dini, iar ramurile se pot folosi ??i ??n aranjamente florale.
                  </Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">Pret {Math.round(Math.random() * 100)} Lei</Card.Subtitle>
                  {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </div>
            
          </div>

          <FooterPanel />

    
        </div>} />
      )
    }
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path='/produse' element={<Products />}></Route>  
            {ProductPage()}
          <Route path='/clienti' element={<Clients />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path="*" element={<NoPage />} />

        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

