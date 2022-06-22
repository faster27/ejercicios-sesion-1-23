import React, {useRef} from 'react';
import {Contact } from '../../../models/contact.class'
import PropTypes from 'prop-types';

const ContactForm = ({add}) => {
    
    const nameRef=useRef('');
    const apellidoRef=useRef('');
    const emailRef=useRef('');
    
    function addContact(e){
        e.preventDefault();
        const newContact=new Contact(
            nameRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false,
        );
        add(newContact);
    }
    
    return (
        <div>
            <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                    <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre'></input>
                    <input ref={apellidoRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Apellido'></input>
                    <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Email'></input>
                </div> 
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    Add                    
                </button>
            </form>
        </div>
    );
}

ContactForm.protoTypes={
    add: PropTypes.func.isRequired,
}

export default ContactForm;

