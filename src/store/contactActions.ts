import * as actionTypes from './actionTypes';

export function addContact(contact: IContact) {
    const action: ContactAction = {
        type: actionTypes.ADD_CONTACT,
        contact
    }

    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    let allContacts = [...contacts, contact]; 
    localStorage.setItem('contacts', JSON.stringify(allContacts));

    return action; 
}

export function getContact() {
    const action: ContactAction = {
        type: actionTypes.GET_CONTACT,
        contact: JSON.parse(localStorage.getItem('contacts') || '[]')
    }

    return action.contact;
}

