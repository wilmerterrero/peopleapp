import React from 'react'
import { useParams } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { ContactBar } from './ContactBar';
import { Grid, Icon, IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      }
    },
    contactImg: {
        padding: 70,
        margin: 'auto' 
    },
    items: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    favorite: {
        padding: 3, 
        color: '#F7AB94'
    },
    contactHeader: {
        paddingTop: 20,
        paddingBottom: 20,
        '& > *': {
            textAlign: 'center',
            fontWeight: 'bold',
        },
       '& > p': {
            color: '#C9C6C6'
        }
    },
    contactInfo: {
        '& > *': {
            fontWeight: 'bold'
        }
    },
    divider: {
        margin: `5px 0 0 ${theme.spacing(1)}px`,
        borderTop: '1px solid #F2977F'
    }
 })
);

interface Props {

}

export const FullContact: React.FC<Props> = () => {

    let fullcontact: any = JSON.parse(localStorage.getItem('contacts')!);
    const [contact, setContact] = React.useState<IContact[]>([]);
    const { id } : any = useParams();

    React.useEffect(() => {
        if(typeof fullcontact === 'object'){
            setContact(fullcontact)
        }
        //eslint-disable-next-line
    }, [])

    const classes = useStyles();

    return (
        <>
            <ContactBar 
                id={id}
            />
            <div className={classes.root}>
                <div className={classes.items}>
                    <IconButton className={`far fa-star ${classes.favorite}`} />
                    <IconButton className={`far fa-trash-alt ${classes.favorite}`} />
                </div>
               {
                    contact.map((contact: IContact, index) => 
                        contact.phone === id 
                        ?
                          (
                              <div
                                  key={index}
                              >
                                <Avatar className={classes.contactImg}>
                                    {contact.name[0]}
                                </Avatar>
                                <div className={classes.contactHeader}>
                                    <Typography variant="h5">
                                        {contact.name}
                                    </Typography>
                                    <Typography variant="body1">
                                        03/08/1981 
                                    </Typography>
                                </div>
                                <hr className={classes.divider} />
                                <div className={classes.contactInfo}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Icon 
                                                className={`far fa-comment-dots`} 
                                                style={{ color: '#EE5B2D'  }} 
                                            />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                                {contact.mobile}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" style={{ color: '#939090', float: 'right', fontWeight: 'bold' }}>
                                                mobile 
                                            </Typography> 
                                        </Grid>
                                    </Grid>
                                </div>
                                <hr className={classes.divider} />
                                <div className={classes.contactInfo}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Icon 
                                                className={`far fa-comment-dots`} 
                                                style={{ color: '#EE5B2D'  }} 
                                            />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                                {contact.phone}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" style={{ color: '#939090', float: 'right', fontWeight: 'bold' }}>
                                                phone 
                                            </Typography> 
                                        </Grid>
                                    </Grid>
                                </div>
                                <hr className={classes.divider} />
                                <div className={classes.contactInfo}>
                                    <Grid container>
                                        <Grid item xs={8} style={{ paddingLeft: 98 }}>
                                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                                {contact.email}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" style={{ color: '#939090', float: 'right', fontWeight: 'bold' }}>
                                                email 
                                            </Typography> 
                                        </Grid>
                                    </Grid>
                                </div>
                                <hr className={classes.divider} />
                                <div className={classes.contactInfo}>
                                    <Grid container>
                                        <Grid item xs={8} style={{ paddingLeft: 98 }}>
                                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                                {contact.workmail}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" style={{ color: '#939090', float: 'right', fontWeight: 'bold' }}>
                                                email 
                                            </Typography> 
                                        </Grid>
                                    </Grid>
                                </div>
                                <hr className={classes.divider} />
                                <div className={classes.contactInfo}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <Icon className={`fas fa-map-marked-alt`} style={{ color: '#EE5B2D'  }} />
                                        </Grid>
                                        <Grid item xs={2} style={{ paddingRight: 162 }}>
                                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                                {contact.address}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" style={{ color: '#939090', float: 'right', fontWeight: 'bold' }}>
                                                address 
                                            </Typography> 
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                          ) 
                        :
                            null

                    )
                }
                
           </div>
        </>
    );
}