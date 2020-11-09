import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { Grid, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1)
            }
        },
        contacts: {
            '& > *': {
                margin: theme.spacing(2),
            }
        },
        rounded: {
               color: '#fff',
               backgroundColor: deepOrange[500], 
               padding: 10 
            }
        }
    )
);

interface IContact {
    id: string,
    name: string,
    phone: number
}

export const Contacts: React.FC = () => {

    const [contacts, setContacts] = useState<IContact[]>(JSON.parse(window.localStorage.getItem('contact') || '{}'));

    React.useEffect(() => {
      const node = loadCSS(
        'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
        document.querySelector('#font-awesome-css'),
      );

      return () => {
        node.parentNode!.removeChild(node);
      };
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" component="h2" style={{ fontWeight: 'bold', color: '#EE5B2D' }}>
                Favorites
            </Typography>
            <div className={classes.contacts}>
                {
                
                    Array.from(contacts).map((contact: IContact) => (
                <Grid container key={contact.id}>
                    <Grid item xs={3}>
                        <Avatar variant="rounded" className={classes.rounded}>
                            {contact.name[0]}
                        </Avatar>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" component="p" style={{ fontWeight: 'bold', color: '#0E1B25' }}>
                            {contact.name}
                        </Typography>
                        <Typography variant="subtitle1" component="p" style={{ color: '#ACACAC' }}>
                            {contact.phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Icon className="fas fa-phone-volume" style={{ fontSize: 40, color: '#DFDFDF', margin: 4, transform: `rotate(-30deg)`  }} />
                    </Grid>
                </Grid>
                    ))
                }

           </div>
       </div>
    );
}