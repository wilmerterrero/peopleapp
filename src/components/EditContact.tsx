import React from 'react'
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

interface Props {

}

export const EditContact: React.FC<Props> = ({}) => {
 const classes = useStyles();
    return (
        <>
            <BaseBar />
            <div className={classes.root}>
                <Typography variant="h6">Contact edition</Typography>
                <form>
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        placeholder="Name"
                        aria-describedby="Contact name"
                        fullWidth
                        variant="outlined"
                        className={classes.input}
                    />
                   <TextField
                       id="phone"
                       name="phone"
                       label="Phone"
                       type="tel"
                       placeholder="(000) 000 000"
                       aria-describedby="Contact phone number"
                       fullWidth
                       variant="outlined"
                       className={classes.input}
                    />
                    <TextField
                       id="mobile"
                       name="mobile"
                       label="Mobile"
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
                    <TextField
                       id="email"
                       name="email"
                       label="Personal Email"
                       type="email"
                       placeholder="wilmer@terrero.com"
                       aria-describedby="Contact personal email"
                       fullWidth
                       variant="outlined"
                       className={classes.input}
                    />
                    <TextField
                       id="workmail"
                       name="workmail"
                       label="Work Email"
                       type="email"
                       placeholder="info@terrero.com"
                       aria-describedby="Contact work email"
                       fullWidth
                       variant="outlined"
                       className={classes.input}
                    />
                    <TextField
                       id="address"
                       name="address"
                       label="Address"
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
