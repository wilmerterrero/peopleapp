import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { FormControl, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    searchField: {
      height: 4,
      "&::placeholder": {
        fontWeight: "bold",
      },
    },
  })
);

export const Search: React.FC = () => {
  const [search, setSearch] = React.useState({
    contact: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })

  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl fullWidth className={classes.margin}>
        <TextField
          name="contact"
          onChange={onChange}
          type="text"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "#A7B8B7" }} />
              </InputAdornment>
            ),
            classes: { input: classes.searchField },
          }}
          variant="outlined"
        />
      </FormControl>
    </div>
  );
};
