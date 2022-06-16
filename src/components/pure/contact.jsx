import React,{useState}from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class';

const ContactComponent=({contact}) =>{


    const [conectado,setConectado]=useState(contact.conectado);

    const activarContact=()=>{
        
        setConectado(!conectado)
        contact.conectado=conectado
        
    }
    
    return(

        <div>
            <h3>
                Nombre: { contact.name }
            </h3>
            <h3>
                Apellido: { contact.apellido }
            </h3>
            <h3>
                email: { contact.email }
            </h3>
            <h3>
                You are: { contact.conectado ? "Contacto en Línea":"Contacto No Disponible" }
            </h3>

            <div>
                <button onClick={activarContact}>
                        disponible- NoDisponible
                </button>
            </div> 

        </div>
    )

}

ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact),
  
};

export default ContactComponent;