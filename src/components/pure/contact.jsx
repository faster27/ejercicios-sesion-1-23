import React,{useState}from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class';

const ContactComponent=({contact, estado, remove}) =>{



  

    function contactEstadoIcon(){
        if(contact.conectado){
            return (<i onClick={()=>estado(contact)} className='bi-toggle-on task-action' style={{color:'green'}}>conectado</i>);
        }else{
            return (<i onClick={()=>estado(contact)} className='bi-toggle-off task-action' style={{color:'gray'}}>desconectado</i>);  
        }
    }
    
    return(

        <tr className='fw-normal'>
            <td>
                <span>{contact.name}</span>
            </td>
            <td>
                <span>{contact.apellido}</span>
            </td>
            <td>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {contactEstadoIcon()}
                {contact ? contact.conectado : contact.conectado}
              
            </td>
            <td className='align-middle'>
                <i className='bi-trash task-action' style={{color:'tomato'}} onClick={()=>remove(contact)}></i>
            </td>
           

        </tr>

    )

}

ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact),
  
};

export default ContactComponent;