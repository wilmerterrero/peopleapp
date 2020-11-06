import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface Props {
   search?: React.ReactNode;
   alphabet?: React.ReactNode;
   contacts?: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { search, alphabet, contacts } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
     <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={11}>
             { search }
             { contacts }
        </Grid>
        <Grid item xs={1}>
            { alphabet }
        </Grid>
      </Grid>
    </div>
    </Container>
 );
}
