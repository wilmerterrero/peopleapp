declare module 'fg-loadcss'

///

interface IContact {
    id: string
    name: string
    phone: number
    mobile?: number
    email?: string
    workmail?: string
    address?: string
}

type ContactState = {
    contacts: IContact[]
    fullcontact?: IContact 
}

type ContactAction = {
    type: string
    contact: IContact
}

type DispatachType = (args: ContactAction) => ContactAction;