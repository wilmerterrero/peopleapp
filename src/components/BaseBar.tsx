import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

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
  }
})(Button);

const StyledBar = withStyles({
  root: {
    background: '#EE5B2D',
  }
})(AppBar);


interface Props {

}

export const BaseBar: React.FC<Props> = () => {

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
            <StyledBar 
              position="fixed"
              elevation={0}
            >
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <Icon className="fas fa-cog" />
                </IconButton>
                <Typography variant="h5" className={classes.title} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  People
                </Typography>
                <ConfigButton>
                  <Icon className="fas fa-plus plusIcon" style={{ fontSize: 18, color: '#EE5B2D', margin: 4  }} />
                </ConfigButton>
                </Toolbar>
            </StyledBar>
        </div>
    );
}