declare module 'fg-loadcss'

///

interface IContact {
    id: string
    name: string
    phone: number
    mobile?: number
    birthdate?: Date
    email?: string
    workmail?: string
    address?: string
}

type ContactAction = {
    contact: IContact
}

type DispatachType = (args: ContactAction) => ContactAction;