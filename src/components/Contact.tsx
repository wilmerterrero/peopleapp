import React from 'react'
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

export const Contact: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <>
            <ContactBar />
            <div className={classes.root}>
                <IconButton className={`far fa-star ${classes.favorite}`} />
                <Avatar className={classes.contactImg}>
                    H
                </Avatar>
                <div className={classes.contactHeader}>
                    <Typography variant="h5">
                        Roger Federer
                    </Typography>
                    <Typography variant="body1">
                        03/08/1981 
                    </Typography>
               </div>
               <hr className={classes.divider} />
               <div className={classes.contactInfo}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Icon className={`far fa-comment-dots`} style={{ color: '#EE5B2D'  }} />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                + 22 61 233 61 25 
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
                            <Icon className={`far fa-comment-dots`} style={{ color: '#EE5B2D'  }} />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                + 22 61 233 61 25 
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
                                info@rogerfederer.com
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
                                roger@rogerfederer.com
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
                                Infinite Loop Cupertino California 95014
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
        </>
    );
}