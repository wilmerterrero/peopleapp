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
   contacts?: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { contacts } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
     <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
             { contacts }
        </Grid>
      </Grid>
    </div>
    </Container>
 );
}
