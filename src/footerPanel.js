import './style/footerPanel.css';

import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { IconContext} from "react-icons";



const FooterPanel = () => {
    return ( 
        
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
     );
}
 
export default FooterPanel;