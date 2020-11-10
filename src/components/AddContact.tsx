import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addContact } from '../store/contactActions';

import { nanoid } from 'nanoid';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { BaseBar } from './BaseBar';
import { Button, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

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

export const AddContact: React.FC = () => {
    const [contact, setContact] : any  = useState<IContact | {}>({
        id: '', name: '', phone: 0
    });
    const [id] = useState(nanoid);
    const [error, setError] = useState(false);
    const [formstatus, setFormStatus] = useState(false);

    const dispatch: Dispatch<any> = useDispatch();

    const saveContact = React.useCallback(
      (contact: IContact | any) => dispatch(addContact(contact)),
      [dispatch]      
    )

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({
           ...contact, 
           [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(contact.name === "" && contact.phone <= 0){
            setError(true);
            return;
        }

        setFormStatus(true);

        const newContact = {
            id: id,
            name: contact.name,
            phone: contact.phone
        }

        saveContact(newContact)

        setTimeout(() => {
            window.location.href = '/';
        }, 1500);
    }

    const classes = useStyles();
    return (
        <>
            <BaseBar />
            <div className={classes.root}>
                { formstatus && 
                  error === false &&
                    (
                        <Alert severity="success">
                            Contact created. You will referer to the home page.
                        </Alert> 
                     )
                }
                { formstatus === false && 
                  error &&
                    (
                        <Alert severity="error">
                            Sorry, the form is invalid. Please review, adjust and try again.
                        </Alert> 
                     )
                }
                <Typography variant="h6">New Contact</Typography>
                <form
                    onSubmit={onSubmit}
                >
                    <TextField
                        error={error}
                        id="name"
                        name="name"
                        onChange={onChange}
                        label="Name"
                        placeholder="Name"
                        aria-describedby="Contact name"
                        fullWidth
                        variant="outlined"
                        className={classes.input}
                    />
                    <TextField
                       error={error}
                       id="phone"
                       name="phone"
                       onChange={onChange}
                       label="Phone"
                       type="number"
                       placeholder="(000) 000 000"
                       aria-describedby="Contact phone number"
                       fullWidth
                       variant="outlined"
                       className={classes.input}
                    />
                    <Button
                        fullWidth
                        style={{ backgroundColor: '#EE5B2D', color: '#fff' }}
                        type="submit"
                    >Create</Button>
               </form>
            </div>
        </>
    );
}