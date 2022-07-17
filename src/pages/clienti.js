import FooterPanel from "../footerPanel";
import NavPanel from "../navPanel";
import '../style/clients.css'

const Clients = () => {





    return (
        <div>
            <NavPanel />
            <div>
                <h1>Inregistrati-va cu noi</h1>
                <form>
                    <div>
                        <h3>Domeniu de activitate</h3>
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
                        
                        <div className="details">
                            <label id="required" for="altele">&nbsp;Denumire firma: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="required" for="altele">&nbsp;Sediul firmei (strada, nr.): &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="required" for="altele">&nbsp;Cod postal, loc., judet: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Telefon: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="detail-text" for="altele">&nbsp;Fax: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>

                        <div className="details">
                            <label id="required" for="altele">&nbsp;e-mail: &nbsp;</label>
                            <input type='text' id="details-item" >
                            </input>
                        </div>            
                    
                        </div>

                </form>
            </div>
            <FooterPanel />
        </div> 
        
     );
}
 
export default Clients;