import * as React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { FormControl, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface Values {
        contact: string
}

interface Props {
        onSubmit: (values: Values) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1)
    },
    searchField: {
      height: 4,
      '&::placeholder': {
        fontWeight: 'bold'
      }
    }
  })
);

interface State {
  contact: string;
}

export const Search: React.FC<Props> = ({ onSubmit }) => {
 const classes = useStyles();
 const [values, setValues] = React.useState<State>({
  contact: '',
});

const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  setValues({ ...values, [prop]: event.target.value });
};
   return (
        <div className={classes.root}>
           <FormControl fullWidth className={classes.margin}>
             <TextField
                id="outlined-adornment-search"
                type="text"
                placeholder="Search"
                value={values.contact}
                onChange={handleChange('contact')}
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                                      <SearchIcon style={{color: '#C6C6C6'}} />
                                  </InputAdornment>,
                  classes: { input: classes.searchField } 
                }}
                variant="outlined"
              />
            </FormControl>
        </div>
             );
}