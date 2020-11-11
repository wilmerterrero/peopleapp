import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Grid, Icon } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const themes = localStorage.getItem("theme") || "#EE5B2D";

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
               backgroundColor: themes, 
               padding: 10 
            }
        }
    )
);
interface Props {
    contact: IContact 
}

export const Contact: React.FC<Props> = (props) => {

    const { contact } = props;
    const { id, name, phone } = contact;

    React.useEffect(() => {
      const node = loadCSS(
        'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
        document.querySelector('#font-awesome-css'),
      );

      return () => {
        node.parentNode!.removeChild(node);
      };
    }, []);

    let history = useHistory();

    const classes = useStyles();

    return (
           <div className={classes.contacts}>
                <Grid container>
                    <Grid item xs={3}>
                        <Avatar 
                            variant="rounded" 
                            className={classes.rounded}
                            onClick={() => { history.push(`/contact/${id}`) }} 
                        >
                           { name[0] } 
                        </Avatar>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography 
                            variant="subtitle1" 
                            component="p" 
                            style={{ fontWeight: 'bold', color: '#0E1B25', cursor: 'pointer' }}
                            onClick={() => { history.push(`/contact/${id}`) }}
                        >
                            { name }
                        </Typography>
                        <Typography variant="subtitle1" component="p" style={{ color: '#ACACAC' }}>
                            { phone }
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Icon 
                            className="fas fa-phone-volume" 
                            onClick={() => { window.location.href = `tel:${phone}` }}
                            style={{ fontSize: 40, color: '#DFDFDF', margin: 4, transform: `rotate(-30deg)` }} 
                        />
                    </Grid>
                </Grid>
           </div>
    );
}