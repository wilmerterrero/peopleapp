import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Contact } from './Contact';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1)
            }
        }
    })
);


export const Contacts: React.FC = () => {

    let initialContacts: any = JSON.parse(localStorage.getItem('contacts')!);
    const [contacts, setContacts] = useState<IContact[]>([]);

    React.useEffect(() => {
        if(typeof initialContacts === 'object'){
            setContacts(initialContacts)
        }
        //eslint-disable-next-line
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" component="h2" style={{ fontWeight: 'bold', color: '#EE5B2D' }}>
                My Contacts
            </Typography>
            {
                contacts ? 
                        contacts.map((contact: IContact, index) => ( 
                                <Contact
                                    key={index}
                                    contact={contact}
                                />
                            ) 
                        )
                : 
                    <Typography variant="subtitle1" component="h2">
                        Any contact yet.
                    </Typography>
            }
           
       </div>
    );
}