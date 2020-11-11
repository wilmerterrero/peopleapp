import React from 'react'
import { useHistory, useParams } from 'react-router-dom';

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

    const { id }: any = useParams();
    let fullcontact: any[] = JSON.parse(localStorage.getItem("contacts") || "[]");
    const contactById = fullcontact.filter((e) => e.id === id);
    const [contact, setContact]: any[] = React.useState<any[]>([]);

    const history = useHistory();
    
    React.useEffect(() => {
        if (contactById) {
            setContact(contactById[0]);
        }
        //eslint-disable-next-line
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setContact({
            ...contact,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        localStorage.setItem('contacts', JSON.stringify([contact]));

        history.push('/');
    }

    const classes = useStyles();
    return (
        <>
            <BaseBar />
            <div className={classes.root}>
                <Typography variant="h6">Contact edition</Typography>
                <form
                    onSubmit={onSubmit}
                >
                    <InputLabel htmlFor="birthdate">Name</InputLabel>
                    <TextField
                        id="name"
                        name="name"
                        value={contact.name}
                        onChange={onChange}
                        aria-describedby="Contact name"
                        fullWidth
                        variant="outlined"
                        className={classes.input}
                    />
                   <InputLabel htmlFor="birthdate">Phone</InputLabel>
                   <TextField
                       id="phone"
                       name="phone"
                       value={contact.phone}
                       onChange={onChange}
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
                       value={contact.mobile}
                       onChange={onChange}
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
                        value={contact.birthdate}
                        onChange={onChange}
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
                       value={contact.email}
                       onChange={onChange}
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
                       value={contact.workmail}
                       onChange={onChange}
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
                       value={contact.address}
                       onChange={onChange}
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
