import * as actionTypes from './actionTypes';

const initialState: ContactState = {
    contacts: [
       {
            id: '',
            name: '',
            phone: 0, 
            mobile: 0,
            email: '',
            workmail: '',
            address: ''
       }
    ],
    fullcontact: {
        id: '',
        name: '',
        phone: 0, 
        mobile: 0,
        email: '',
        workmail: '',
        address: ''
    } 
}

const reducer = (
    state: ContactState = initialState,
    action: ContactAction
):  ContactState => {
    switch (action.type) {
        case actionTypes.ADD_CONTACT:
            const newContact: IContact[] = [
                {
                    id: action.contact.id,
                    name: action.contact.name,
                    phone: action.contact.phone
                }
            ]
            return {
                ...state,
                contacts: newContact
            }
        case actionTypes.GET_CONTACT:
            return {
                ...state,
                fullcontact: action.contact
            }
        case actionTypes.UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(
                    (contact: IContact) =>
                    contact.phone === action.contact.phone
                    ?
                        contact = action.contact
                    :
                        contact
                )
            }
    }
    return state;
}

export default reducer;