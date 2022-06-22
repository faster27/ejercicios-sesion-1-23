import React,{useState} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import '../../Styles/contact.scss'
import ContactForm from '../pure/forms/contactForm';


const ContactListComponent=()=>{

    const contact1 =new Contact("Daniel","Correa","dcorrealenis@gmail.com",false);
    const contact2 =new Contact("Carlos","Jimenez","BorusiaDortmund@gmail.com",true);
    const contact3 =new Contact("Andrez","Perez","OsitoCariñosito@gmail.com",false);

    const [contacts, setContacts] = useState([contact1,contact2,contact3]);

    function deleteContact(contact){
        const index=contacts.indexOf(contact);
        const tempContacts=[...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function cambiarEstadoContacto(contact){
        const index=contacts.indexOf(contact);
        const tempContact=[...contacts];
        tempContact[index].conectado=!tempContact[index].conectado;
        //Actulizamos el estado del componente
        //y actualizaremos la iteracion de la tarea 
        //para que mostrar la tarea actualizada
        setContacts(tempContact);
    }

    function addContact(contact){

        const index=contacts.indexOf(contact);
        const tempContacts=[...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }
    
    
    return(
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your contacts
                        </h5>
                    </div>
                    {/* card body */}
                    <div className='card-body' data-mbd-perfect-scrollbar='true' style={{position:'relative', height:'400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Estado</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent 
                                            key={index} 
                                            contact={contact}
                                            estado={cambiarEstadoContacto}
                                            remove={deleteContact}
                                            >
                                        </ContactComponent>
                                        )
                                    }
                                )}

                            </tbody>
                        </table>
                </div>
            </div>
        </div>
        <ContactForm add={addContact}></ContactForm>
    </div>  
    
    );

};

export default ContactListComponent;