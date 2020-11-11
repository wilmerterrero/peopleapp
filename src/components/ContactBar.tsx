import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

const themes = localStorage.getItem("theme") || "#EE5B2D";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 62 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const ConfigButton = withStyles({
  root: {
    background: '#ffffff',
    color: themes,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
})(Button);

const StyledBar = withStyles({
  root: {
    background: themes,
  }
})(AppBar);


interface Props {
  id: any
}

export const ContactBar: React.FC<Props> = (props) => {

    const { id } =  props;

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
        <div className={classes.root}>
            <StyledBar 
              position="fixed"
              elevation={0}
            >
                <Toolbar>
                  <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={() => { history.push('/') }}
                   >
                    <Icon 
                      className="fas fa-chevron-left" 
                    />
                  </IconButton>
                  <Typography variant="h5" className={classes.title} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Contact Info
                  </Typography>
                  <ConfigButton
                    onClick={() => { history.push(`/edit/${id}`) }}
                  >
                    Edit
                  </ConfigButton>
                </Toolbar>
            </StyledBar>
        </div>
    );
}