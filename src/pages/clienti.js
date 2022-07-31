import FooterPanel from "../footerPanel";
import NavPanel from "../navPanel";
import '../style/clients.css'

import { useState } from "react";
import { BsBank } from "react-icons/bs";

const Clients = () => {

    const [company, setCompany] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [tel, setTel] = useState('')
    const [fax, setFax] = useState('')
    const [email, setEmail] = useState('')
    const [subscribe, setSubscribe] = useState(false)
    const [financial, setFinancial] = useState({
        CUI: '',
        reg_comertului: '',
        banca: '',
        cont_bancar: ''

    })

    let saveClient = () => {
        const apiEntryPoint = "http://localhost:8000/api/clients/";
        fetch(apiEntryPoint, {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({
                denumire_firma: company,
                strada: address,
                cod_postal: address2,
                telefon: tel,
                fax: fax,
                email: email,
                doresc: subscribe

            })
        })
    }


    return (
        <div>
            <NavPanel />
            <div>
                <h1>Inregistrati-va cu noi</h1>
                <form>
                    <div>
                        <h4>Domeniu de activitate</h4><br />
                        {/* Checkbox list */}
                        <input type="checkbox" id="florarie" name="domeniu_de_activitate" value="florarie" />
                        <label for="florarie">&nbsp; florarie</label><br/>
                        <input type="checkbox" id="decorator" name="domeniu_de_activitate" value="decorator, florist" />
                        <label for="decorator">&nbsp; decorator florist</label><br/>
                        <input type="checkbox" id="hoteluri" name="domeniu_de_activitate" value="hoteluri, restaurante" />
                        <label for="hoteluri">&nbsp; hoteluri, restaurante</label><br/>
                        <input type="checkbox" id="organizatori" name="domeniu_de_activitate" value="organizatori evenimente" />
                        <label for="organizatori">&nbsp; organizatori evenimente</label><br/>

                        <input type="checkbox" id="morminte" name="domeniu_de_activitate"
                                value="ingrijire morminte" />
                        <label for="morminte">&nbsp; ingrijire morminte</label><br/>
                        <input type="checkbox" id="gradinari" name="domeniu_de_activitate"
                                value="gradinari" />
                        <label for="gradinari">&nbsp; gradinari</label><br/>
                        <input type="checkbox" id="amenajari" name="domeniu_de_activitate"
                            value="amenajari interioare" />
                        <label for="amenajari">&nbsp; amenajari interioare</label><br/>
                        <input type="checkbox" id="prestari" name="domeniu_de_activitate"
                                value="prestari servicii" />
                        <label for="prestari">&nbsp; prestari servicii</label><br/>

                        <input type="checkbox" id="arhitectura" name="domeniu_de_activitate"
                                value="arhitectura peisagistica" />
                        <label for="arhitectura">&nbsp; arhitectura peisagistica</label><br/>
                        <input type="checkbox" id="design" name="domeniu_de_activitate"
                                value="design" />
                        <label for="design">&nbsp; design</label><br/>

                        <div className="other">
                            <input type="checkbox" id="altele" name="domeniu_de_activitate"
                                value="amenajari interioare" />
                            <label for="altele">&nbsp; altele: &nbsp;</label>
                            <input type='text' id="altele-textarea" >
                            </input>
                        </div><br />
                        {/* End of checkbox list */}
                        
                        <div className="details">
                            <label id="required" for="altele">&nbsp;Denumire firma: &nbsp;</label>
                            <input type='text' id="details-item" value={company}
                                onChange={(e) => setCompany(e.target.value)}>
                            </input>
                        </div>

                        <div className="details">
                            <label id="required" for="altele">&nbsp;Sediul firmei (strada, nr.): &nbsp;</label>
                            <input type='text' id="details-item" value={address}
                                onChange={(e) => setAddress(e.target.value)}>
                            </input>
                        </div>

                        <div className="details">
                            <label id="required" for="altele">&nbsp;Cod postal, loc., judet: &nbsp;</label>
                            <input type='text' id="details-item" value={address2}
                                onChange={(e) => setAddress2(e.target.value)}>
                            </input>
                        </div>

                        {/* Non-required fields */}
                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Telefon: &nbsp;</label>
                            <input type='text' id="details-item" value={tel}
                                onChange={(e) => setTel(e.target.value)}>
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Fax: &nbsp;</label>
                            <input type='text' id="details-item" value={fax}
                                onChange={(e) => setFax(e.target.value)}>
                            </input>
                        </div>

                        <div className="details">
                            <label id="required" for="altele">&nbsp;e-mail: &nbsp;</label>
                            <input type='text' id="details-item" value={email}
                                onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        </div>

                        <div className="other">
                            <input type="checkbox" id="altele" name="domeniu_de_activitate"
                                value={subscribe}
                                onClick={() => setSubscribe(!subscribe)}
                                    />
                            <label for="altele">&nbsp; Doresc sa primesc in mod gratuit ofertele de sezon &nbsp;</label>
                        </div>          
                    
                        {/* Non-required fields */}
                        {/* Financial details */}
                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;C.U.I: &nbsp;</label>
                            <input type='text' id="details-item" value={financial.CUI}
                                onChange={(e) => setFinancial({ CUI: e.target.value,
                                    reg_comertului: financial.reg_comertului,
                                    banca: financial.banca,
                                    cont_bancar: financial.cont_bancar})}>
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Reg. comertului: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Banca: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Cont bancar: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div><br />

                        <h4>Proprietar / administrator firma:</h4><br />
                        {/* Non-required fields */}
                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Numele: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Prenumele: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Data nasterii: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <h4>Persoana de contact:</h4><br />
                        {/* Non-required fields */}
                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Numele: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Prenumele: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Data nasterii: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <h4>Cum ati aflat de noi?</h4><br />
                        <input type="checkbox" id="florarie" name="domeniu_de_activitate" value="florarie" />
                        <label for="florarie">&nbsp; prin recomandari de la cunostinte;</label><br/>
                        <input type="checkbox" id="decorator" name="domeniu_de_activitate" value="decorator, florist" />
                        <label for="decorator">&nbsp; prin Internet;</label><br/>
                        <input type="checkbox" id="hoteluri" name="domeniu_de_activitate" value="hoteluri, restaurante" />
                        <label for="hoteluri">&nbsp; prin Pagini Nationale;</label><br/>

                    </div>

                    <div className="other">
                            <input type="checkbox" id="altele" name="domeniu_de_activitate"
                                value="amenajari interioare" />
                            <label for="altele">&nbsp; prin anunturi din ziare: &nbsp;</label>
                            <input type='text' id="altele-textarea" >
                            </input>
                    </div>
                    <div className="other">
                            <input type="checkbox" id="altele" name="domeniu_de_activitate"
                                value="amenajari interioare" />
                            <label for="altele">&nbsp; altele: &nbsp;</label>
                            <input type='text' id="altele-textarea" >
                            </input>
                    </div><br />

                    <div class="danger">
                        <p><strong>Atentie!&nbsp;</strong>
                        Fiind producatori, ne adresam in primul rand clientilor revanzatori si micilor producatori de plante.
                        Din acest motiv va rugam sa aveti intelegere pentru conditiile ce le cerem:<br />
                        - valoare minima la cumparare = 100 lei;<br />            
                        - sub 100 lei se va aplica un adaos suplimentar de 10%.
                        </p>
                    </div>

                    <div className="submit-strip">
                        <button id="send-button" type="button"
                            onClick={() => {
                                saveClient();
                                setCompany('');
                                setAddress('');
                                setAddress2('');
                                setTel('');
                                setFax('');
                                setEmail('');
                                setSubscribe(false)
                            }}>Trimite</button>
                    </div>
                     

                </form>
            </div>
            <FooterPanel />
        </div> 
        
     );
}
 
export default Clients;