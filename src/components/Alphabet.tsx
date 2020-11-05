import React from 'react';
import { IconButton } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            backgroundColor: '#E9E9E9',
            padding: 10,
            paddingLeft: 10,
        },
        button: {
            padding: 7,
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: 13,
            fontWeight: 'bold',
            color: '#363636'
        }
    })
);

interface Props {

}

export const Alphabet: React.FC<Props> = ({}) => {
    const classes = useStyles();
    const letters = "abcdefghijklmnopqrstuvwxyz".split('');
    return (
        <div className={classes.root}>
            <IconButton 
                size='small' 
                className={classes.button}
                key="dot"
            >&bull;</IconButton>
        {
            letters.map((letter, i) => {
                return (
                    <IconButton 
                        size='small' 
                        className={classes.button}
                        key={i}
                    >{letter.toUpperCase()}</IconButton>
                )
            })
        }
        </div>
    );
}