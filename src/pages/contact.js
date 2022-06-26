import FooterPanel from "../footerPanel";
import NavPanel from "../navPanel";
import '../style/contact.css'

import contactImg from '../images/5236601.jpg'
import { useState } from "react";



const Contact = () => {

    const [forename, setForename] = useState('')
    const [ name, setName ] = useState('')
    const [ country, setCountry ] = useState('Ro')
    const [ subject, setSubject ] = useState('')

    const api = 'http://localhost:8000/api/lista/'
   
    const saveMessage = () => {
        fetch( api, {
            method: 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                prenume: forename,
                nume: name,
                tara: country,
                subiect: subject
            })
        })
       
    }



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
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                saveMessage();
                                setForename('');
                                setName('');
                                setCountry('Ro');
                                setSubject('');
                                console.log('mesaj sent successfully')
                                
                                }
                            }>
                                <label htmlFor="fname">Prenume</label>
                                    <input type="text" id="fname" name="firstname" value={forename} 
                                        onChange={(event) => setForename(event.target.value)}
                                         placeholder="Prenumele tau.."/>
                                <label htmlFor="lname">Nume</label>
                                    <input type="text" id="lname" name="lastname" value={name}
                                        onChange={(e) => setName(e.target.value)} placeholder="Numele de familie.." />
                                <label htmlFor="country">Tara</label>
                                    <select id="country" name="country" value={country}
                                        onChange={(e) => setCountry(e.target.value)}>
                                        <option value="Ro">Romania</option>
                                        <option value="De">Germania</option>
                                        <option value="Au">Austria</option>
                                        <option value="Hu">Ungaria</option>
                                    </select>
                                <label htmlFor="subject">Subiect</label>
                                    <textarea id="subject" name="subject" value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                         placeholder="Scrie ceva.." style={{height: '170px'}}>
                                    </textarea>
                                <input type="submit"/>
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