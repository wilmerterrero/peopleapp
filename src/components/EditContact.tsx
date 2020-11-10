import React from 'react'
import { useParams } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { BaseBar } from './BaseBar';
import { Button, InputLabel, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1)
            }
        },
        input: {
            paddingBottom: 10 
        }
    })
);

export const EditContact: React.FC = () => {

    let fullcontact: any = JSON.parse(localStorage.getItem('contacts')!);
    const [contact, setContact] = React.useState<IContact[]>([
        {
            id: '',
            name: '',
            phone: 0
        }
    ]);
    const { id } : any = useParams();

    React.useEffect(() => {
        if(typeof fullcontact === 'object'){
            setContact(
                fullcontact.map((contact: IContact) => ( 
                    contact.phone === id 
                    ?
                       contact
                    :
                      null 
                ))
            )
        }
        //eslint-disable-next-line
    }, [])
    console.log(contact)

    const classes = useStyles();
    return (
        <>
            <BaseBar />
            <div className={classes.root}>
                <Typography variant="h6">Contact edition</Typography>
                <form>
                    <InputLabel htmlFor="birthdate">Name</InputLabel>
                    <TextField
                        id="name"
                        name="name"
                        value={contact[0].name}
                        aria-describedby="Contact name"
                        fullWidth
                        variant="outlined"
                        className={classes.input}
                    />
                   <InputLabel htmlFor="birthdate">Phone</InputLabel>
                   <TextField
                       id="phone"
                       name="phone"
                       value={contact[0].phone}
                       type="tel"
                       placeholder="(000) 000 000"
                       aria-describedby="Contact phone number"
                       fullWidth
                       variant="outlined"
                       className={classes.input}
                    />
                    <InputLabel htmlFor="birthdate">Mobile</InputLabel>
                    <TextField
                       id="mobile"
                       name="mobile"
                       type="tel"
                       placeholder="(000) 000 000"
                       aria-describedby="Contact mobile number"
                       fullWidth
                       variant="outlined"
                       className={classes.input}
                    />
                    <InputLabel htmlFor="birthdate">Contact Birthdate</InputLabel>
                    <TextField
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        aria-describedby="Contact birthdate"
                        fullWidth
                        variant="outlined"
                        className={classes.input}
                    />
                    <InputLabel htmlFor="birthdate">Personal Email</InputLabel>
                    <TextField
                       id="email"
                       name="email"
                       type="email"
                       placeholder="wilmer@terrero.com"
                       aria-describedby="Contact personal email"
                       fullWidth
                       variant="outlined"
                       className={classes.input}
                    />
                    <InputLabel htmlFor="birthdate">Work Email</InputLabel>
                    <TextField
                       id="workmail"
                       name="workmail"
                       type="email"
                       placeholder="info@terrero.com"
                       aria-describedby="Contact work email"
                       fullWidth
                       variant="outlined"
                       className={classes.input}
                    />
                    <InputLabel htmlFor="birthdate">Address</InputLabel>
                    <TextField
                       id="address"
                       name="address"
                       placeholder="Address"
                       aria-describedby="Contact address"
                       fullWidth
                       variant="outlined"
                       className={classes.input}
                    />
                    <Button
                        fullWidth
                        style={{ backgroundColor: '#EE5B2D', color: '#fff' }}
                        type="submit"
                    >Edit</Button>
               </form>
            </div>
        </>
    )
}
