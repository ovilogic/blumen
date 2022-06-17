import FooterPanel from "../footerPanel";
import NavPanel from "../navPanel";
import '../style/contact.css'

import contactImg from '../images/5236601.jpg'



const Contact = () => {
    return (
        <div>
            <NavPanel />
            <div className="contactDisplay">
                <div className="contactPanel">
                    <div style={{textAlign: 'center'}}>
                        <h2>Contactati-ne</h2>
                        <p>Faceti-ne o vizita sau lasati-ne un mesaj: </p>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img src={contactImg}
                                 alt="contact image"/>
                        </div>
                        <div className="column">
                            <form action="/action_page.php">
                                <label htmlFor="fname">Prenume</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Prenumele tau.." />
                                <label htmlFor="lname">Nume</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Numele de familie.." />
                                <label htmlFor="country">Tara</label>
                                    <select id="country" name="country">
                                        <option value="australia">Romania</option>
                                        <option value="canada">Germania</option>
                                        <option value="usa">Austria</option>
                                        <option value="usa">Ungaria</option>
                                    </select>
                                <label htmlFor="subject">Subiect</label>
                                    <textarea id="subject" name="subject" placeholder="Scrie ceva.." style={{height: '170px'}}>
                                    </textarea>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterPanel />
        </div> 
        
     );
}
 
export default Contact;